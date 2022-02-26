import React from "react";
import "./topbar.scss";
import { Code } from "@material-ui/icons";

export default function TopBar({ open, setOpen }) {
  return (
    // space here ir important!!
    <div className={"topBar  " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            CinS.
          </a>
          <div className="itemContainer">
            <a href="#about" className="logo">
              <Code className="icon" />
              <span>About</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="#projects" className="logo">
              <Code className="icon" />
              <span>Projects</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="#contact" className="logo">
              <Code className="icon" />
              <span>Contact</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
