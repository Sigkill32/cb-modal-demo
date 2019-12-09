import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import "cb-modal-lib/dist/modalStyle.css";
import Example from "./components/modal";
import StrModal from "./components/strModal";
import NormalModal from "./components/normalModal";
import StyledModal from "./components/styledModal";
import Intro from "./components/intro";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="demo-container">
          <Intro />
          <Example />
          <StrModal />
          <NormalModal />
          <StyledModal />
        </div>
      </div>
    );
  }
}

export default App;
