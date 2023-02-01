import { TopLevel } from "../interfaces";

type RedirectFn = (loading: boolean, response: TopLevel | undefined) => void;

export const RedirectMP: RedirectFn = (loading, response) => {
  if (
    process.env.NODE_ENV === "development" &&
    loading === false &&
    (response?.sandbox_init_point !== "" ||
      response?.sandbox_init_point !== undefined)
  ) {
    response?.sandbox_init_point &&
      window.location.replace(response.sandbox_init_point);
  } else if (
    // Use production by default
    loading === false &&
    (response?.init_point !== "" || response?.init_point !== undefined)
  ) {
    response?.init_point && window.location.replace(response.init_point);
  }
};

export const getParameterByName = (name = "", url = window.location.href) => {
  name = name.replace(/[[]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export enum validPaths {
  success = "/pago-exitoso",
  failed = "/pago-fallido",
  pending = "/pago-pendiente",
}

export const payment_id = getParameterByName("payment_id");

// export const payment_id = window.location.search
//   .split("&")
//   .filter((item: string) => item.includes("payment_id"))[0]
//   ?.split("=")[1];

export const keystore = {
  USER_DATA: "user_data",
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

type DateValidation = (
  startDate: number,
  endDate: number,
  currentMonth: "january" | "february"
) => boolean;

export const dateValitation: DateValidation = (
  startDate,
  endDate,
  currentMonth
) => {
  return (
    new Date().getDate() >= startDate &&
    new Date().getDate() <= endDate &&
    new Date().getMonth() === (currentMonth === "january" ? 0 : 1) &&
    new Date().getFullYear() === 2023
  );
};

const privateSaleVerification = (): boolean =>
  !dateValitation(20, 31, "january");

const earlyBirdVerification = (): boolean =>
  !dateValitation(1, 10, "february");

const realPriceVerification = (): boolean =>
  !dateValitation(11, 18, "february");

export const getCurrentPrice = (): number =>
  dateValitation(20, 31, "january")
    ? 29
    : dateValitation(1, 10, "february")
    ? 49
    : 99;

export interface Timeline {
  day: number;
  month: string;
  typeOfSale: string;
  description: string;
  price: string;
  until: string;
  ribbon?: boolean;
  disabled: boolean;
  discount?: number;
}

export const timeline: Timeline[] = [
  {
    day: 21,
    month: "Enero",
    typeOfSale: "Venta Privada",
    description:
      "Venta privada especial para socios, colaboradores, referidos, amigos y ex-estudiantes.",
    price: "29 USD",
    until: "31 de Enero",
    ribbon: true,
    disabled: privateSaleVerification(),
    discount: 71,
  },
  {
    day: 1,
    month: "Febrero",
    typeOfSale: "Early Bird Sale",
    description:
      "Primera venta pública abierta a todo público con un descuento por pronta compra.",
    price: "49 USD",
    until: "10 de Febrero",
    ribbon: true,
    disabled: earlyBirdVerification(),
    discount: 51,
  },
  {
    day: 10,
    month: "Febrero",
    typeOfSale: "Precio General",
    description: "Última semana de venta pública antes del inicio del curso.",
    price: "99 USD",
    until: "18 de Febrero",
    disabled: realPriceVerification(),
  },
];
