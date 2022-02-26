import React, { useRef, useState } from "react";
import "./contact.scss";
import { LinkedIn, GitHub, Instagram } from "@material-ui/icons";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  // const SERVICE = process.env.YOUR_SERVICE_ID;
  // const TEMPLATE = process.env.YOUR_TEMPLATE_ID;
  // const USER_ID = process.env.YOUR_USER_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jgkx3qg",
        "template_aap8k1f",
        formRef.current,
        "user_tbhQ2wXn4FRiymCtwJJtU"
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
      <div className="block">
        <div className="rigth">
          <h1>Contact me</h1>
          <form ref={formRef} onSubmit={handleSubmit}>
            <h3>Name</h3>
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              name="user_name"
            ></input>
            <h3>Subject</h3>
            <input
              type="text"
              className="input"
              placeholder="Subject"
              name="user_subject"
            ></input>
            <h3>Email</h3>
            <input
              type="text"
              className="input"
              placeholder="Email"
              name="user_email"
            ></input>
            <h3>Message</h3>
            <textarea
              rows="5"
              type="text"
              className="text-area"
              placeholder="Message"
              name="user_message"
            ></textarea>
            <div className="wrapper-text">
              <button className="btnform">Submit</button>
              <p>{done && "Message sent, thank you!"}</p>
            </div>
          </form>
        </div>
        <div className="left">
          <div className="wrapper">
            <h2 className="title">Please fell free to send a mesasge 😊</h2>
            <h1 className="thanks">Thank you!</h1>
            <div className="social-icons">
              <a
                className="i"
                href="https://www.linkedin.com/in/cintia-siqueira/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
              <a
                className="i"
                href="https://github.com/ciisiq"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a
                className="i"
                href="https://www.instagram.com/ciifotos/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
