import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { State, TopLevel } from "../interfaces";
import {
  keystore,
  validPaths,
  getParameterByName,
  validateEmail,
} from "../utils";
import { API } from "../api";

const useUserInfo = () => {
  const [state, setState] = useState<State>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<TopLevel>();
  const [error, setError] = useState<string | null>(null);

  const { firstName, lastName, email, phoneNumber } = state;

  const pathnameOrigin: string = window.location.origin;

  const navigate = useNavigate();

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setState((state) => ({ ...state, [target.name]: target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    formValidations();

    window.dataLayer.push({
      event: "checkout_initiated",
    });

    if (
      Object.values(state).every((item) => item.trim() !== "") &&
      !isNaN(+phoneNumber) &&
      phoneNumber.trim().length >= 9
    ) {
      setLoading(true);
      try {
        let checkoutUrl = `${API}/checkout.py`;

        if (process.env.NODE_ENV === "development") {
          checkoutUrl += "?sandbox=true";
        } else {
          checkoutUrl += "?sandbox=false";
        }

        const response = await fetch(checkoutUrl, {
          method: "POST",
          body: JSON.stringify({
            title: "Private Sale",
            success_url: `${pathnameOrigin}${"/#"}${validPaths.success}`,
            pending_url: `${pathnameOrigin}${"/#"}${validPaths.pending}`,
            failure_url: `${pathnameOrigin}${"/#"}${validPaths.failed}`,
            user_first_name: firstName,
            user_last_name: lastName,
            user_email: email,
            user_phone: `+51${phoneNumber}`,
            invitation_code: getParameterByName("invitation_code"),
            price: 49.0,
          }),
        });

        const data = await response.json();

        setResponse(data);

        const user = {
          user_first_name: firstName,
          user_last_name: lastName,
          user_email: email,
          user_phone: `+51${phoneNumber}`,
          invitation_code: getParameterByName("invitation_code"),
        };

        localStorage.setItem(keystore.USER_DATA, JSON.stringify(user));

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error: any) {
        setLoading(false);
        navigate("/server-error");
        throw new Error(error);
      }
    }
  };

  const formValidations = () => {
    if (!firstName.trim()) setError("¡Nombre no válido!");
    else if (!lastName.trim()) setError("¡Apellido no válido!");
    else if (!validateEmail(email)) setError("¡Correo electrónico no válido!");
    else if (!phoneNumber.match(/^\d+$/) || phoneNumber.trim().length < 9)
      setError("¡Número de teléfono no válido!");

    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    loading,
    response,
    handleInputChange,
    handleSubmit,
    error,
  };
};

export default useUserInfo;
