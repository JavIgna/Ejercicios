import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";

const ComponenteA = ({ contact }) => {
  return (
    <div>
      <h2>Nombre: {contact.nombre} </h2>
      <h2>Apellido: {contact.apellido}</h2>
      <h3>Correo: {contact.email}</h3>
      <h1>
        Estado:
        {contact.conectado ? " usuario en linea" : " usuario desconectado"}{" "}
      </h1>
    </div>
  );
};

ComponenteA.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponenteA;
