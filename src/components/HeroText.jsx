import React from "react";

import ExcursionButton from "./ExcursionButton";

import { Row } from "react-bootstrap";

const HeroText = () => {
  return (
    <div className="buttonContainer">
      <Row>
        <div className="container">
          <div className="box-shadow2"></div>
          <div className="box-shadow"></div>
          <main className="heroText">
            <h4 className="splashy">Welcome!!!</h4>
            <div className="heroLine" />
            <section className="paragraph heroParagraph">
              <p className="heroParagraph">
                Receive a warm welcome while exploring our website and offering
                you the best in tours and cruise ship shore excursions in the
                beautiful Bay Island of Roatan, Honduras. Roatan Jay's Roatan
                Tours will provide you with an exceptional Roatan excursion with
                fun and excitement in each adventure.Choose from a wide range of
                activities that will richly color your vacation and give you a
                time to remember.
              </p>
            </section>
            <ExcursionButton />
          </main>
        </div>
      </Row>
    </div>
  );
};

export default HeroText;
