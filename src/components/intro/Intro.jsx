import React from "react";
import "./intro.scss";
import { LinkedIn, GitHub, Instagram, Twitter } from "@material-ui/icons";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="right">
        <div className="wrapper">
          <div className="social-icons">
            <a
              className="i"
              href="https://www.linkedin.com/in/cintia-siqueira/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              className="i"
              href="https://github.com/ciisiq"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <a
              className="i"
              href="https://www.instagram.com/ciifotos/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              className="i"
              href="https://twitter.com/Cii_siq"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
          </div>
          <div className="myintro-container">
            <div className="myintro">
              <span className="first">
                Hello I'm <span className="secondname">Cintia</span>
              </span>
            </div>
          </div>
          <div className="message">
            <span className="myrole">Front-End Developer</span>
          </div>
          <div className="btn-wrapper">
            <a href="#contact">
              <button className="btn contactbtn">Contact me</button>
            </a>
            <a href="CVCintia_site.pdf" download="Cintia CVCintia_site.pdf">
              <button className="btn getresume"> Get Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="left">
        <div className="block-neon">
          <h1>Welcome</h1>

          <span> to my portfolio 😉</span>
        </div>
      </div>
    </div>
  );
}
