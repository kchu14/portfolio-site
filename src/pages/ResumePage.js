import React from "react";
import Hero from "../components/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import resumeImage from "../assets/images/resume.png";
import { Document, Page } from "react-pdf";

function ResumePage(props) {
  return (
    <Container fluid={true}>
      <Hero title={props.title} />
      <Row className="justify-content-around text-center">
        <div className="d-inline-block g-card">
          <img className="col-11" src={resumeImage} alt={resumeImage} />
        </div>
      </Row>
    </Container>
  );
}

export default ResumePage;
