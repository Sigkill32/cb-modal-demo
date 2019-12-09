import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import cb from "../images/cb.png";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img src={cb} alt="cb logo" onClick={this.scrollToTop} />
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Nested Modal
          </Link>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Bounce
          </Link>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Zoom
          </Link>
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Fade
          </Link>
        </div>
      </nav>
    );
  }
}
