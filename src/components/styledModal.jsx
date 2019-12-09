import React, { Component } from "react";
import { open } from "cb-modal-lib";

export default class StyledModal extends Component {
  openModal = () => {
    open({
      head: () => <h2>A styled modal</h2>,
      body: () => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      ),
      footer: () => <p>A bogus footer</p>,
      styles: () => ({
        width: "40%"
      }),
      clsName: () => "fade"
    });
  };

  render() {
    return (
      <div className="demo" id="section4">
        <h1>Nested Modal</h1>
        <div className="description">
          <p>
            A modal that opens with a fade-in animation. This is the default
            animation avilable with the library
          </p>
          <div>
            <button onClick={this.openModal}>Fade</button>
          </div>
        </div>
      </div>
    );
  }
}
