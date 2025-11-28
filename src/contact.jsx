import React from "react";
import './css/components/contact.css'

const Contact = () => {
  return (
    <div>
      {/* Contact */}
      <h1
        className="heading"
        style={{ marginTop: "200px", marginBottom: "20px" }}
        id="Contact"
      >
        Contact Me
      </h1>

      <div className="contact_container">
        <dl className="contact">
          <dt>Address:</dt>
          <dd>
            Kharaj Chakraborty <br />
            Mathabhanga, Coochbehar, West Bengal, India, PIN-736146
          </dd>

          <dt>Phone:</dt>
          <dd>+91 1234567890</dd>
          <dd>+91 1234567890</dd>

          <dt>Email:</dt>
          <dd>johnthecena1987@gmail.com</dd>
        </dl>
      </div>
    </div>
  );
};

export default Contact;