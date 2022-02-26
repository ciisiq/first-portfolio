import React from "react";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="block">
        <div className="right">
          <div className="title-block">
            <h3 className="title-projects">Projects</h3>
          </div>
          <h2 className="title-about">About</h2>
          <p className="text">All text here</p>
          <h3 className="mini-titles">#JavaScript #Jira #CSS</h3>
        </div>
        <div className="left">
          <h2 className="title-left">Final Project</h2>
          <image className="image-project" alt="previe-image">
            Image here
          </image>
          <button className="btn-link">GitHub</button>
          <button className="btn-link">Demo</button>
        </div>
      </div>
    </div>
  );
}
