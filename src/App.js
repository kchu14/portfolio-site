import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Kyle Chu",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/" },
        { title: "Contact", path: "/" }
      ],
      home: {
        title: "Welcome",
        subTitle: "Projects",
        text: "My Projects Below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Contact Me?"
      }
    };
  }
  render() {
    return <h1> hello </h1>;
  }
}

export default App;
