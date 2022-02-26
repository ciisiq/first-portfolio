import React from "react";
import "./menu.scss";
import { Code } from "@material-ui/icons";

export default function Menu({ open, setOpen }) {
  return (
    <div className={"menu  " + (open && "active")}>
      <ul>
        <li onClick={() => setOpen(false)}>
          <a href="#intro">
            <Code className="icon-link" />
            Home
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#about">
            <Code className="icon-link" />
            About
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#projects">
            <Code className="icon-link" />
            Projects
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#contact">
            <Code className="icon-link" />
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
