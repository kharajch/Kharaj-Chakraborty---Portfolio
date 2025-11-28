import React from "react"
import './css/components/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar slide-in-top">
      <h1 className="logo">kharaj</h1>

      <ul className="nav_ul">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar