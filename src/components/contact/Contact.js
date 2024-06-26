import React, { useRef, useState } from 'react';
import './contact.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_jgkx3qg',
        'template_aap8k1f',
        formRef.current,
        'user_tbhQ2wXn4FRiymCtwJJtU'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="rigth">
        <div className="wrapper-rigth">
          <h1>Contact me</h1>
          <form ref={formRef} onSubmit={handleSubmit}>
            <h3>Name</h3>
            <input
              required
              type="text"
              className="input"
              placeholder="Your Name"
              name="user_name"
            ></input>
            <h3>Subject</h3>
            <input
              required
              type="text"
              className="input"
              placeholder="Subject"
              name="user_subject"
            ></input>
            <h3>Email</h3>
            <input
              required
              type="email"
              className="input"
              placeholder="youremail@email.com"
              name="user_email"
            ></input>
            <h3>Message</h3>
            <textarea
              required
              rows="5"
              type="text"
              className="text-area"
              placeholder="Message"
              name="message"
            ></textarea>
            <div className="wrapper-text">
              <button className="btnform">Submit</button>
              <p>{done && 'Message sent, thank you!'}</p>
            </div>
          </form>
        </div>
      </div>
      <div className="left">
        <div className="wrapper-left">
          <h2 className="please">Please fell free to send a message 😊</h2>
          <h1 className="thanks">Thank you!</h1>
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
        </div>
      </div>
    </div>
  );
}
