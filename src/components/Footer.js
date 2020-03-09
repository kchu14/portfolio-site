import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import FontAwesome from "react-fontawesome";

function Footer() {
  return (
    <MDBFooter
      color="unique-color-dark"
      className="page-footer kc-footer font-small pt-0"
    >
      <div>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol
              md="6"
              lg="5"
              className="text-center text-md-left mb-4 mb-md-0"
            >
              <h6 className="mb-0 white-text">
                This site was made by Kyle Chu
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <i className="mr-lg-4 ml-0" style={{ color: "#000" }}>
                Phone: (860) 987-3868
              </i>

              <a className="" href="mailto: kchuinbox@gmail.com">
                <i className="mr-lg-4" style={{ color: "#000" }}>
                  Email: kchuinbox@gmail.com
                </i>
              </a>
              <a className="fb-ic" href="https://www.facebook.com/kylechu1998">
                <i
                  className="fa fa-facebook-square black-text mr-lg-4"
                  style={{ color: "#000" }}
                ></i>
              </a>
              <a className="li-ic" href="https://www.linkedin.com/in/kyle-chu/">
                <i
                  className="fa fa-linkedin black-text mr-lg-4"
                  style={{ color: "#000" }}
                >
                  {" "}
                </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
