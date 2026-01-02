import "./css/Home.css"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="home_container" id="Home">
        <img src="images/terminals/terminal_red.gif" className="terminal rotate-in-2-cw" />
        <h1 className="hello text-focus-in">Hello!</h1>
        <br />
        <h2 className="name slide-in-blurred-left">I Am Kharaj Chakraborty</h2>
        <br/>
        <p className="intro bounce-top">
          I create beautiful, functional websites and applications with Link <br />
            focus on user experience and clean code.
        </p>
        <br/>
        <h1 className="slogan swing-in-top-fwd">"LET'S BUILD SOMETHING AMAZING TOGETHER"</h1>
        <br />
        <div className="btn">
          <Link to="/Projects"><button className="btn1 slide-in-elliptic-top-fwd">View My Work</button></Link>
          <Link to="/Contact"><button className="btn1 slide-in-elliptic-top-fwd">Get In Touch</button></Link>
        </div>
        <br />
        <div className="social-icons roll-in-blurred-left">
          <a to="https://github.com/kharajch"><img src="images/social/github.png" alt="github" /></a>
          <a to="https://www.linkedin.com/in/kharajch"><img src="images/social/linkedin.png" alt="linkedin" /></a>
          <a to="https://x.com/kharajch"><img src="images/social/twitter.png" alt="twitter" /></a>
        </div>
      </div>
    </>
  )
}

export default Home