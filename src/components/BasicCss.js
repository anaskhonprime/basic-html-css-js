import React from "react";
import "../styles/style.css";

import cloud from "../assets/images/cloud.png";
import mountain from "../assets/images/mountain.png";
import computer from "../assets/images/computer.png";   

function BasicCss() {
  return (
    <div className="container">
      <div className="box-1">
        <img className="top-cloud" src={cloud} alt="img" />
        <p className="header">I'm Prime</p>
        <p>A Software Developer</p>
        <img className="bot-cloud" src={cloud} alt="img" />
        <img src={mountain} alt="mountain" />
      </div>
      <div className="middle-container">
        <div className="profile">
          <img src={computer} alt="" />
          <h2>Hello.</h2>
          <p>
            Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna.
            Non auctor, montes nulla distinctio.
          </p>
        </div>
        <hr />
        <div className="skills">
          <h2>My Skills.</h2>
          <div className="skill-row">
            <img className="" src={computer} alt="" />
            <h3>Lorem & Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
              Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit
              nam, lectus ante, ut lorem eros.
            </p>
          </div>
          <div className="skill-row">
            <img className="" src={computer} alt="" />
            <h3>Lorem Ipsum Dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu,
              bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel
              eu, rutrum nam.
            </p>
          </div>
        </div>
        <hr />
        <div className="contact-me">
          <h2>Get In Touch</h2>
          <h3>Lorem ipsum dolor sit amet, non elit.</h3>
          <p>
            Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales,
            tellus donec dui, ornare erat.
          </p>
          <a className="btn" href="mailto:name@email.com">
            CONTACT M E
          </a>
        </div>
      </div>

      <div className="bottom-container">
        <a className="footer-link" href="https://www.linkedin.com/">
          LinkedIn
        </a>
        <a className="footer-link" href="https://twitter.com/">
          Twitter
        </a>
        <a className="footer-link" href="https://www.appbrewery.co/">
          Website
        </a>
        <p>© Name Surname.</p>
      </div>
    </div>
  );
}

export default BasicCss;
