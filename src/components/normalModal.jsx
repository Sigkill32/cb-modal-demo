import React, { Component } from "react";
import { open } from "cb-modal-lib";

export default class NormalModal extends Component {
  openModal = () => {
    open({
      head: () => <h2>A simple modal</h2>,
      body: () => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      ),
      footer: () => <p>A bogus footer</p>,
      styles: () => ({
        width: ""
      }),
      clsName: () => "zoom"
    });
  };

  render() {
    return (
      <div className="demo" id="section3">
        <h1>Zoom</h1>
        <div className="description">
          <p>A modal that opens with a zoom-in animation</p>
          <div>
            <button onClick={this.openModal}>Zoom</button>
          </div>
        </div>
      </div>
    );
  }
}
