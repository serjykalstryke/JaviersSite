import React, { useState, Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import ContactModal from "./ContactModal";

const Button = () => {
  return (
    <span className="buttonContainer">
      <Nav.Link className="links text" href="#excursions">
        <a className="button">See Excursions!</a>
      </Nav.Link>
      <ContactModal />
    </span>
  );
};

export default Button;
