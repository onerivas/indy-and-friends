import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Main from "../components/main";
import Image from "react-bootstrap/Image";
import indyPort from "../images/indyPort.JPG";

function Home() {
  return (
    <Main>
      <div className="w-75 mx-auto">
        <h3 className="text">
          <strong>Hello, friends!</strong>
        </h3>
        <p className="text">
          I'm Indy! Welcome to the home of Indy and Friends Dog Walking and Pet
          Sitting. We have friends all over the Bay Area and look forward to
          meeting many more!
        </p>
      </div>
      <div>
        <Image
          src={indyPort}
          width="500"
          thumbnail
          className="d-block mx-auto"
        />
      </div>
      <div className="w-75 mx-auto my-3">
        <h3 className="text">
          <strong>It's what we do!</strong>
        </h3>
        <p className="text">
          Here at Indy and Friends, we love spending time with and taking care
          of our friends when their pet parents are away. We make sure our
          friends don't experience stresses that are known to happen at a kennel
          or pet hotel. Our friends can have us accompany them on walks or even
          stay the night!!!
        </p>
      </div>
      <Row className="w-75 mx-auto my-5">
        <Col className="text" xs={6}>
          <h4>
            <strong>Daily Check-ins:</strong>
          </h4>
          <ul>
            <li>Done at least twice a day</li>
            <li>Fresh food and water daily</li>
            <li>Medication when needed</li>
            <li>Cleaning cat litter boxes</li>
            <li>Walks aroung the block</li>
            <li>Pet photo updates</li>
            <li>Our friends favorite, PLAY TIME!!!</li>
          </ul>
        </Col>
        <Col className="text" xs={6}>
          <h4>
            <strong>Overnight Stays:</strong>
          </h4>
          <ul>
            <li>Everything included with daily check-ins, PLUS!</li>
            <li>A sleep over so your pet isn't lonely at night</li>
            <li>Field trips to beaches and/or parks</li>
          </ul>
        </Col>
      </Row>
    </Main>
  );
}

export default Home;
