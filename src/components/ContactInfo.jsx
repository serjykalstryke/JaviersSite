import React, { Fragment } from "react";
import { Button, Row, Card } from "react-bootstrap";

export const ContactInfo = () => {
  return (
    <Fragment>
      <Card>
        <Button
          href="mailto:javierwebster@hotmail.com"
          variant="outline-light"
          style={{ backgroundColor: "rgba(209,104,119,255)" }}
        >
          Email: javierwebster@hotmail.com
        </Button>

        <Button
          href="tel:+50489187136"
          variant="outline-light"
          style={{ backgroundColor: "rgba(209,104,119,255)" }}
        >
          Phone: 504.891.7136
        </Button>
        <Button
          href="https://www.tripadvisor.com/Profile/JayTours21"
          variant="outline-light"
          style={{ backgroundColor: "rgba(209,104,119,255)" }}
          target="_blank"
        >
          TripAdvisor
        </Button>
        <Button
          href="https://www.facebook.com/JayTours21/"
          variant="outline-light"
          style={{ backgroundColor: "rgba(209,104,119,255)" }}
          target="_blank"
        >
          Facebook
        </Button>
      </Card>
    </Fragment>
  );
};

export default ContactInfo;
