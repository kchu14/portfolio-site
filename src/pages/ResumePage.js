import React from "react";
import Hero from "../components/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import resumeImage from "../assets/images/3-3-20-1.png";

function ResumePage(props) {
  return (
    <div className="pb-5 kc-h100">
      <Hero title={props.title} />
      <Row className="justify-content-around text-center">
        <div className="d-inline-block g-card">
          <img className="col-11" src={resumeImage} alt={resumeImage} />
        </div>
      </Row>
    </div>
  );
}

export default ResumePage;
