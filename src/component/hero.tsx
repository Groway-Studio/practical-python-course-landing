import { useEffect } from "react";

import { Form, FormGroup, Label, Input, Button } from "./shared/forms";
import Spinner from "./spinner";

import python from "./../assets/python.png";
import duration from "./../assets/duration.svg";
import hours from "./../assets/hours.svg";
import price from "./../assets/price.svg";

import { useUserInfo } from "../hooks";
import { RedirectMP, getCurrentPrice } from "../utils";
import "./../sass/component/_hero.scss";
import { InvitationInfo } from '../interfaces/index';

export default function Hero( { is_code_valid, invitation_code = '', discounted_price }: InvitationInfo ) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    loading,
    response,
    error,
    code,
    setCode,
    handleInputChange,
    handleSubmit,
  } = useUserInfo();


  const initialCode = () =>{
    setCode(invitation_code);
  }

  useEffect(() => {
    RedirectMP(loading, response);
    initialCode();
    // eslint-disable-next-line
  }, [loading]);

  return (
    <>
      {loading && <Spinner info={true} />}
      {!!error && <p className="error-message">{error}</p>}
      <div className="heroComponent">
        <div className="contentHero">
          <div className="header-title">
            <div className="dflex fd-row">
              <img src={python} className="imgPy" alt="python" />
              <div className="dflex fd-col title">
                <h5>Aprende</h5>
                <span className="cover-text">Python</span>
                <small>De forma práctica...</small>
              </div>
            </div>
            <p>
              <b>En Groway Academy</b> diseñamos este curso para que puedas
              aprender de forma práctica y rápida, mediante la construcción de proyectos reales para que puedas aprender de la forma más efectiva.
            </p>
            <p>
              Por que sabemos que no te gusta esperar para ver los resultados de tu aprendizaje, desde el primer día al último aprenderás python construyendo landing pages, paginas web, tiendas virtuales, blogs, chatbots y mucho más.
            </p>
          </div>
          <article className="presitions">
            <figure className="item">
              <img src={duration} alt="hours" />
              <figcaption>
                <span>
                  <b>Inicio</b> <br />
                  18 Febrero
                </span>
                <span>
                  <b>Duración</b> <br />4 semanas
                </span>
              </figcaption>
            </figure>
            <figure className="item">
              <img src={hours} alt="hours" />
              <figcaption>
                <span>
                  Sábados y <br />
                  Domingos
                </span>
                <span>de 9:00 a 12:00 GMT-5</span>
              </figcaption>
            </figure>
            <figure className="item">
              <img src={price} alt="price" />
              <figcaption>
                <span>Costo</span>
                <h2>
                  <b>USD 99.00</b>
                </h2>
              </figcaption>
            </figure>
          </article>
        </div>
        <aside className="formInfo-hero">
          {/* <div className="formInfo-hero__ribbon">33% OFF</div> */}
          <h2>
            Private <span>Sale!</span>
          </h2>
          <Form id="checkoutForm" onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </FormGroup>            
            <FormGroup>
              <Label htmlFor="prefix1">+51</Label>
              <Label htmlFor="prefix1">Teléfono</Label>
              <Input
                type="tel"
                id="prefix1"
                name="phoneNumber"
                value={phoneNumber}
                maxLength={12}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="code">Código de descuento</Label>
              <Input
                type="text"
                id="code"
                name="code"
                value={code}
                onChange={handleInputChange}
              />
            </FormGroup>      

            <Button type="submit">
              {
                is_code_valid === true
                ? `Comprar por USD ${discounted_price}.00`
                : `Comprar por USD ${getCurrentPrice()}.00`
              }
              
            </Button>
          </Form>
        </aside>
      </div>
    </>
  );
}
