import "./css/Navbar.css"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
      <nav className="navbar slide-in-top">
        <h1 className="logo">kharaj</h1>
        <ul className="nav_ul">
          <Link to="/Home"><li>Home</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Projects"><li>Projects</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
        </ul>


        <button className="hamburger">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
    </>
  )
}

export default Navbar