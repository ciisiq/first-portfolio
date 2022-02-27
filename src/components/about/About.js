import React from "react";
import "./about.scss";
import Typical from "react-typical";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="block">
        <div className="about-title"></div>
        <div className="right">
          <div className="block">
            <div className="wrapper">
              <div className="designer-skills">
                <h1>Designer Skills</h1>
                <p>
                  • Design thinking
                  <br /> • Photoshop
                  <br /> • Figma
                  <br /> • Illustrator
                  <br /> • Lightroom
                  <br /> • InDesign
                </p>
              </div>

              <div className="developer-skills">
                <h1>Developer Skills</h1>
                <p>
                  • Problem solving
                  <br /> • JavaScript
                  <br /> • ReactJS
                  <br /> • HTML/CSS
                  <br /> • Nodejs
                  <br /> • SQL
                  <br /> • Netlify
                  <br /> • Git
                </p>
              </div>
              <div className="personal-text">
                <h1>Personal Skills</h1>
                <p>
                  • Teamwork
                  <br /> • Communication
                  <br /> • Agile Methodologies
                  <br /> • Customer Experience
                  <br /> • Self Driven
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="left">
          <div className="wrapper-left">
            <h1>About</h1>
            <text className="about-me">
              Hi, I'm a Brazilian living in London since 2019, so I can speak
              Portuguese and English. I have a degree in Graphic Design in
              Brazil and I moved here well when I graduated in Brazil, I ended
              up not working in the area of Graphic Design.
              <br />
              <br />
              I spent my first 2 years in London studying the language and
              culture and now more confident I thought about focusing on my
              career.
              <br />
              <br />
              When I was younger, at 16/17 I had my first contact with HTML and
              CSS, that's when I really liked the creative area and page design.
              I ended up going down that path and today I see that I want to go
              back and go down the path of developing programs and websites.
              <br />
              <br />I believe that both knowledge together are a great
              advantage.
            </text>

            <div className="moving-text">
              <h2>
                <Typical
                  loop={Infinity}
                  steps={[
                    "JavaScript learner 🤭",
                    1000,
                    "Photography lover 📷",
                    1000,
                    "I will be a great developer in the future 😍",
                    1000,
                    "I keep learning things 😉",
                    1000,
                    "Pet lover 😻🐶",
                    1000,
                    "Japan culture lover and games 🏯🎮",
                    1000,
                  ]}
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
