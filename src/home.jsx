import React from "react"
import './css/components/home.css'
import './css/components/animista.css'

const Home = () => {
  return (
    <div className="main">
      {/* Home Page */}
      <div className="home_container" id="Home">
        <img
          className="terminal rotate-in-2-cw"
          src="/images/terminals/terminal_red.gif"
          alt="terminal"
        />
        <h1 className="hello text-focus-in">Hello!</h1>
        <br />
        <h2 className="name slide-in-blurred-left">I Am Kharaj Chakraborty</h2>
        <br />
        <p className="intro bounce-top">
          I create beautiful, functional websites and applications with a <br />
          focus on user experience and clean code.
        </p>
        <br />
        <h1 className="slogan swing-in-top-fwd">
          "LET'S BUILD SOMETHING AMAZING TOGETHER"
        </h1>
        <br />
        <div className="btn">
          <a href="#Projects">
            <button className="btn1 slide-in-elliptic-top-fwd">View My Work</button>
          </a>
          <a href="#Contact">
            <button className="btn1 slide-in-elliptic-top-fwd">Get In Touch</button>
          </a>
        </div>
        <br />
        <div className="social-icons roll-in-blurred-left">
          <a href="https://github.com/kharajch">
            <img src="/images/social/github.png" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/kharajch">
            <img src="/images/social/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://x.com/kharajch">
            <img src="/images/social/twitter.png" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;