"use client"

import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f3hjjph', 'template_b3p8plq', form.current, {
        publicKey: 'ckafbeg1B21dLSeyy',
      })
      .then(
        () => {
          alert('Message Sent SUCCESSFULLY!');
        },
        (error) => {
          aleart('FAILED To Send Message!');
        },
      );

      e.target.reset();
  };

  return (
    <>
      <h1 className="heading" id="Contact">Contact Me</h1>

      <div className="contact_container hidden">
        <dl className="contact">
          <dl className="dl">Address:</dl>
          <dd className="dd">Kharaj Chakraborty
            <br />
            Mathabhanga, Coochbehar, West
            Bengal, India, PIN-736146
          </dd>
          <dl className="dl">Email:</dl>
          <dd className="dd">kharajchakraborty@gmail.com</dd>
          <div className="social-icons">
            <a href="https://github.com/kharajch"><img src="images/social/github.png" alt="github" /></a>
            <a href="https://www.linkedin.com/in/kharajch"><img src="images/social/linkedin.png" alt="linkedin" /></a>
            <a href="https://x.com/kharajch"><img src="images/social/twitter.png" alt="twitter" /></a>
          </div>
        </dl>


        <div className="contact_form_container">
          <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name :</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email :</label>
            <input type="text" id="email" name="email" required />

            <label htmlFor="comment">Message :</label>
            <textarea id="comment" rows={10} cols={39} name="message" required></textarea>
            <div className="submit_btn_container">
              <button id="submit_btn" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact