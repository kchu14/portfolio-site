import React from "react";

import Card from "../components/Card";

import github from "../assets/images/github.png";
import northeasternLogo from "../assets/images/northeastern-logo.png";
import gameImage from "../assets/images/2048_logo.png";
// import youtube from "../assets/images/youtube.png";
// import evverest from "../assets/images/evverest.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "2048 Game",
          subTitle: "2048 Game Created in Java",
          imgSrc: gameImage,
          link: "https://github.com/kchu14/2048",
          selected: false
        },
        {
          id: 1,
          title: "Northeastern Transportation Data Analysis",
          subTitle:
            "Compares transportation modes / does ML analysis on Uber tipping odds",
          imgSrc: northeasternLogo,
          link:
            "https://github.com/kchu14/Northeastern-Transportation-Analysis",
          selected: false
        },
        {
          id: 2,
          title: "This Portfolio Site",
          subTitle: "Source Code for This Site",
          imgSrc: github,
          link: "https://github.com/kchu14/portfolio-site",
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
