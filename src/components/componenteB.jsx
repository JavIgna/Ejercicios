import React from "react";
import { Contact } from "../models/contact.class";
import ComponenteA from "./componenteA";

const ComponenteB = () => {
  const defaultContact = new Contact(
    "NombreEjemplo",
    "ApellidoEjemplo",
    "email@email.com",
    false
  );

  return (
    <div>
      <div>Usuario:</div>
      <ComponenteA contact={defaultContact}></ComponenteA>
    </div>
  );
};

export default ComponenteB;
