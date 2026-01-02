import { useRef } from "react";
import "./css/Contact.css"
const Contact = () => {

  const idname = useRef()
  const idemail = useRef()
  const idcomment = useRef()
  const idsubmit_btn = useRef()

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
          <form className="contact_form">
            <label htmlFor="name">Name :</label>
            <input type="text" id="name" ref={idname} required />

            <label htmlFor="email">Email :</label>
            <input type="text" id="email" ref={idemail} required />

            <label htmlFor="comment">Message :</label>
            <textarea id="comment" rows={10} cols={39} ref={idcomment} required></textarea>

            <button id="submit_btn" ref={idsubmit_btn}>Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact