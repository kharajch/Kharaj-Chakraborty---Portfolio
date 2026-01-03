"use client"
import Link from "next/link"
const Navbar = () => {
  return (
    <>
      <nav className="navbar slide-in-top">
        <h1 className="logo">kharaj</h1>
        <ul className="nav_ul">
          <Link href="/Home"><li>Home</li></Link>
          <Link href="/About"><li>About</li></Link>
          <Link href="/Projects"><li>Projects</li></Link>
          <Link href="/Contact"><li>Contact</li></Link>
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