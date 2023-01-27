import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Hero,
  Modality,
  Calendar,
  Faqs,
  Instructor,
  OverlarTransparent,
  Spinner,
  Timeline,
} from "../component";
import { Header, Footer } from "../component/shared";

import { API } from "../api";

import "../sass/component/_overlay.scss";
import { InvitationInfo } from "../interfaces";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const searchParams = new URLSearchParams(window.location.search);

  const [invitationInfo, setInvitationInfo] = useState<InvitationInfo>({
    is_code_valid: false,
    invitation_code: '',
    discounted_price: 0,
  });
  
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API}/invitation_code.py`, {
          method: "POST",
          body: searchParams.get("invitation_code")
            ? JSON.stringify({
                invitation_code: searchParams.get("invitation_code"),
              })
            : JSON.stringify({}),
        });

        const data: string = await response.text();       

        if (
          data === "Invalid invitation_code" ||
          data === "No invitation_code"
        ) {
          setShowOverlay(true);
          setLoading(false);
        } else {
          setLoading(false);
          setShowOverlay(false);
          setInvitationInfo(JSON.parse(data));          
        }

        //setLoading(false);
      } catch (error: any) {
        setLoading(false);
        navigate("/server-error");

        throw new Error(error);
      }
    })();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Spinner info={false} />
      ) : (
        <>
          <div className="overlay-transparent-main">
            <Header />
            <Hero 
              is_code_valid={invitationInfo.is_code_valid}
              invitation_code={invitationInfo.invitation_code}
              discounted_price={invitationInfo.discounted_price} />
            <Modality />
            <Calendar />
            <Timeline />
            <Instructor />
            <Faqs />
            <Footer />
          </div>

          {showOverlay && <OverlarTransparent/>}          

        </>
      )}
    </>
  );
}
