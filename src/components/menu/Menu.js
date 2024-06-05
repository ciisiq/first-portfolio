import React from 'react';
import './menu.scss';
import CodeIcon from '@mui/icons-material/Code';

export default function Menu({ open, setOpen }) {
  return (
    <nav className={'menu  ' + (open && 'active')}>
      <ul>
        <li onClick={() => setOpen(false)}>
          <a href="#intro">
            <CodeIcon className="icon-link" />
            Home
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#about">
            <CodeIcon className="icon-link" />
            About
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#projects">
            <CodeIcon className="icon-link" />
            Work
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#contact">
            <CodeIcon className="icon-link" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
