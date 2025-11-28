import React from "react";
import './App.css'
import Navbar from './navbar.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import Projects from './projects.jsx'
import Contact from "./contact.jsx"
import "./js/script.js"

function App() {

  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <footer>
        <p>&copy; 2025 kharajch. All rights reserved.</p>
      </footer>
      <script src="script.js"></script>
    </>
  )
}

export default App
