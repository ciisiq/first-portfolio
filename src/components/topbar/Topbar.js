import React from 'react';
import './topbar.scss';
import CodeIcon from '@mui/icons-material/Code';

export default function TopBar({ open, setOpen }) {
  return (
    // space here ir important!!
    <nav className={'topBar  ' + (open && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            CinS.
          </a>
          <div className="itemContainer">
            <a href="#about" className="logo">
              <CodeIcon className="icon" />
              <span>About</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="#projects" className="logo">
              <CodeIcon className="icon" />
              <span>Work</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="#contact" className="logo">
              <CodeIcon className="icon" />
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
    </nav>
  );
}
