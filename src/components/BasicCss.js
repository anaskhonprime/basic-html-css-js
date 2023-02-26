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
        <p className="desc">A Software Developer</p>
        <img className="bot-cloud" src={cloud} alt="img" />
        <img className="mountain" src={mountain} alt="mountain" />
      </div>
      <div className="middle-container">
        <div className="profile">
          <img className="skill-image" src={computer} alt="" />
          <h2 className="skill-header">Hello.</h2>
          <p className="skill-text">
            Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna.
            Non auctor, montes nulla distinctio.
          </p>
        </div>
        <hr />
        <div className="skills">
          <h2 className="skill-header">My Skills.</h2>
          <div className="skill-row">
            <img
              className="img-1"
              src="https://www.accountingcpd.net/LBR/G20051010163243-949240147/images/courses/C20201217135725-339868872-course.jpg"
              alt=""
            />
            <h3>Lorem & Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
              Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit
              nam, lectus ante, ut lorem eros.
            </p>
          </div>
          <div className="skill-row">
            <img
              className="img-2"
              src="https://miro.medium.com/max/400/1*9x36DL2ncTegcS6OjEO16A.png"
              alt=""
            />
            <h3>Lorem Ipsum Dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu,
              bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel
              eu, rutrum nam.
            </p>
          </div>
        </div>
        <hr className="hr-2" />
        <div className="contact-me">
          <h2 className="skill-header">Get In Touch</h2>
          <h3 className="desc">Lorem ipsum dolor sit amet, non elit.</h3>
          <p className="skill-text">
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
        <p>© Prime Simple Website Design</p>
      </div>
    </div>
  );
}

export default BasicCss;
