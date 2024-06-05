import './intro.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

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
              <LinkedInIcon />
            </a>
            <a
              className="i"
              href="https://github.com/ciisiq"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              className="i"
              href="https://www.instagram.com/ciifotos/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              className="i"
              href="https://twitter.com/Cii_siq"
              target="_blank"
              rel="noreferrer"
            >
              <XIcon />
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
            <a
              href="https://cisiq.myportfolio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn getresume"> Design Portfolio</button>
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
