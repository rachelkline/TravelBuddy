import React from "react";
import Test from "../Budget/test";
import Itinerary from "../Itinerary/Itinerary";
import Nested from "../Friends/Friends";

import { Container, Row, Col, Card } from "react-bootstrap";

class Main extends React.Component {
  render() {
    return (
      // <Container fluid className="p-3">
      <Container className="p-3">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row className="mt-4">
          <Col xs={12} sm={12} md={12} lg={6}>
            {/* <Card className="shadow"> */}
            {/* <Card.Body> */}
            <h2>
              <strong>Name of the trip</strong>
            </h2>
            {/* </Card.Body> */}
            {/* </Card> */}
          </Col>
          {/* <Col xs={12} md={3}>
    <Card className="shadow">
  <Card.Body>Location Goes Here. </Card.Body>
</Card>
    </Col>
    <Col xs={12} md={3}>
    <Card className="shadow">
  <Card.Body>Code: 0G6TY54</Card.Body>
</Card>
    </Col> */}
        </Row>
        <Row className="mt-3">
          <Col xs={12} sm={12} md={12} lg={6}>
            <Test />
            <div className="mt-3">
              <Nested />
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Card className="shadow ">
                  <Card.Body>Location Goes Here. </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Card className="shadow mt-3">
                  <Card.Body>Code: 0G6TY54</Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Itinerary />
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      </Container>
    );
  }
}

export default Main;
