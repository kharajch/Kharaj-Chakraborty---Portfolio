import { useState } from "react"
import "./css/Contact.css"
const Contact = () => {

  const [Form, setForm] = useState([{
    name: "",
    email: "",
    message: ""
  }])
  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1 className="heading" id="Contact">Contact Me</h1>

      <div className="contact_container hidden">
        <dl className="contact">
          <dl>Address:</dl>
          <dd>Kharaj Chakraborty
            <br />
            Mathabhanga, Coochbehar, West
            Bengal, India, PIN-736146
          </dd>
          <dl>Email:</dl>
          <dd>kharajchakraborty@gmail.com</dd>
          <div className="social-icons">
            <a href="https://github.com/kharajch"><img src="images/social/github.png" alt="github" /></a>
            <a href="https://www.linkedin.com/in/kharajch"><img src="images/social/linkedin.png" alt="linkedin" /></a>
            <a href="https://x.com/kharajch"><img src="images/social/twitter.png" alt="twitter" /></a>
          </div>
        </dl>


        <div className="contact_form_container">
          <form className="contact_form" method="POST" action={"https://kharajch-contact-form-submit-api.onrender.com/"}>
            <label htmlFor="name">Name :</label>
            <input type="text" id="name" name="name" value={Form.name} onChange={handleChange} required />

            <label htmlFor="email">Email :</label>
            <input type="text" id="email" name="email" value={Form.email} onChange={handleChange} required />

            <label htmlFor="comment">Message :</label>
            <textarea id="comment" rows={10} cols={39} name="message" value={Form.message} onChange={handleChange} required></textarea>
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