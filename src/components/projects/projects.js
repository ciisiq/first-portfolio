import React, { useState } from "react";
import "./projects.scss";
import { data } from "../../data";

export default function Projects() {
  const [currentSlide, setcurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setcurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setcurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="right">
                <div className="rigthcontainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>{d.hastags}</span>
                </div>
              </div>
              <div className="left">
                <div className="leftcontainer">
                  <div className="imgcontainer">
                    <img src={d.img} alt="coming-soon" />
                  </div>
                  <a
                    className="i"
                    href={d.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn-link">Github</button>
                  </a>
                  <a
                    className="i"
                    href={d.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn-link">Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        onClick={() => handleClick("left")}
        alt="arrow"
      />
      <img
        src="assets/arrow.png"
        className="arrow rigth"
        onClick={() => handleClick("rigth")}
        alt="arrow"
      />
    </div>
  );
}
