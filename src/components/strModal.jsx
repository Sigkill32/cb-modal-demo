import React, { Component } from "react";
import { open } from "cb-modal-lib";

class StrModal extends Component {
  openModal = () => {
    open({
      head: () => <h2>Random Heading</h2>,
      body: () => "A string paragraph",
      footer: () => "A string footer",
      clsName: () => "bounce"
    });
  };

  render() {
    return (
      <div className="demo" id="section2">
        <h1>Bounce</h1>
        <div className="description">
          <p>
            A modal that opens with a bouncing animation. The library's
            flexibilty to allow additon of user defined className allows users
            to customize the modals to their liking.
          </p>
          <div>
            <button onClick={this.openModal}>Bounce</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StrModal;
