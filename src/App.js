import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Kyle Chu",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Resume", path: "/resume" }
      ],
      home: {
        title: "Welcome",
        subTitle: "",
        text: "Checkout some projects below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Contact Me?"
      },
      resume: {
        title: "Resume"
      }
    };
  }

  render() {
    return (
      <Router className="h-100">
        <Container className="p-0 body-container" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Kyle Chu</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />

          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Route
            path="/about"
            exact
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/resume"
            exact
            render={() => <ResumePage title={this.state.resume.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
