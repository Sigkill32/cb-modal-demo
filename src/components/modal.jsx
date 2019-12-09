import React, { Component } from "react";
import { open } from "cb-modal-lib";

class Example extends Component {
  openModal = () => {
    open({
      head: () => <h2>Random Heading</h2>,
      body: () => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      ),
      footer: () => (
        <button onClick={this.openInnerModal}>Open Inner Modal</button>
      )
    });
  };

  buttonStyle = {
    padding: "10px",
    backgroundColor: "#667eea",
    border: "1px solid #667eea",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    outline: "none",
    marginTop: "20px"
  };

  openInnerModal = () => {
    open({
      head: () => "Inner Heading",
      body: () => <p>Inner Body</p>,
      footer: () => <p>Inner Footer</p>
    });
  };

  render() {
    return (
      <div id="section1" className="demo">
        <h1>Nested Modal</h1>
        <div className="description">
          <p>
            Create a modal inside a modal. The flexibilty provided by the
            library allows you to create nested modals
          </p>
          <div>
            <button onClick={this.openModal}>Nested Modal</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
