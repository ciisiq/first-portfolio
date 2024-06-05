import React from 'react';
import './about.scss';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-title"></div>
      <div className="right">
        <div className="block">
          <div className="wrapper">
            <div className="designer-skills">
              <h2>Designer Skills</h2>
              <ul>
                <li>Design thinking</li>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Lightroom</li>
                <li>InDesign</li>
              </ul>
            </div>

            <div className="developer-skills">
              <h2>Developer Skills</h2>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>ReactJS</li>
                <li>Ui libraries</li>
                <li>HTML/CSS</li>
                <li>Nodejs</li>
                <li>Git</li>
              </ul>
            </div>
            <div className="soft-skills">
              <h2>Soft Skills</h2>
              <ul>
                <li>Teamwork</li>
                <li>Self Driven</li>
                <li>Problem solving</li>
                <li>Communication</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="left">
        <div className="wrapper-left">
          <h1>About</h1>
          <text className="about-me">
            <p>
              🌟 Passionate Software Engineer focused on Front-End development
              and web applications, dedicated to continuous growth in the
              dynamic tech landscape. I bring a creative, communicative, and
              easy-going approach to every collaboration I engage.
            </p>
            <p>
              🚀 Proficient in crafting scalable web applications using a modern
              tech stack, in JavaScript, ReactJs, Nodejs, and Tailwind. It's not
              just about the code; it's about collaboration, time management,
              and Agile methodology using CI/CD delivery. A tech enthusiast with
              a keen sense of teamwork and a drive to deliver results.
            </p>
            <p>
              🎨 My background in Graphic Design, coupled with my design
              thinking skills, help me in positions where I can contribute as a
              UX/UI designer. I believe in applying design concepts and
              user-centred thinking to create exceptional user experiences,
              blending the artistry of design with code.
            </p>
          </text>

          <div className="moving-text">
            <p>
              <TypeAnimation
                sequence={[
                  'JavaScript learner 🤭',
                  1000,
                  'Photography lover 📷',
                  1000,
                  'I love chess ♟️',
                  1000,
                  'I keep learning things 😉',
                  1000,
                  'Pet lover 😻🐶',
                  1000,
                  'Japan culture lover and games 🏯🎮',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
