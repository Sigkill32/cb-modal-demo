import React, { Component } from "react";
import { open as modOpen } from "cb-modal-lib";
import LiveEdit from "./liveEdit";

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#667eea",
  border: "1px solid #667eea",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
  outline: "none",
  marginTop: "20px"
};

const scope = { modOpen };

class Example extends Component {
  openModal = () => {
    modOpen({
      head: () => <h2>Random Heading</h2>,
      body: () => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      ),
      footer: () => (
        <button onClick={this.openInnerModal} style={buttonStyle}>
          Open Inner Modal
        </button>
      )
    });
  };

  openInnerModal = () => {
    modOpen({
      head: () => "Inner Heading",
      body: () => <p>Inner Body</p>,
      footer: () => <p>Inner Footer</p>
    });
  };

  componentDidMount() {
    console.log(modOpen);
  }

  code = `
  class Example extends React.Component {
    constructor() {
      super();
      this.openModal = this.openModal.bind(this);
    }

    openModal() {
      modOpen({
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
  
    openInnerModal() {
      modOpen({
        head: () => "Inner Heading",
        body: () => <p>Inner Body</p>,
        footer: () => <p>Inner Footer</p>
      });
    };
  
    render() {
      return (
        <div>
          <button onClick={this.openModal}>Nested Modal</button>
        </div>
      );
    }
  }`;

  render() {
    return (
      <div
        id="section1"
        className="demo"
        style={{ paddingTop: "0", height: "98vh" }}
      >
        <h1>Nested Modal</h1>
        <div className="description" style={{ marginTop: "0" }}>
          <p>
            Create a modal inside a modal. The flexibilty provided by the
            library allows you to create nested modals
          </p>
          <div>
            <button onClick={this.openModal}>Nested Modal</button>
          </div>
        </div>
        <LiveEdit code={this.code} scope={scope} />
      </div>
    );
  }
}

export default Example;
