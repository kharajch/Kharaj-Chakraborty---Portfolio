"use client"
const About = () => {
  return (
    <>
    <h1 className="heading" id="About">About Me</h1>
    <div className="about_container hidden">
        <p className="details">
          I'm a passionate web developer who thrives on crafting clean, responsive, and
                user-friendly digital experiences. With a strong foundation in modern technologies, I turn ideas into
                elegant, functional websites that make an impact.
        <br />
        <span className="bubble">HTML</span>
        <span className="bubble">CSS</span>
        <span className="bubble">JS</span>
        <span className="bubble">Node JS</span>
        <span className="bubble">React JS</span>
        <span className="bubble">Express JS</span>
        <span className="bubble">Next JS</span>
        </p>
        <div className="myimg_container">
          <img src="images/kharaj.jpg" alt="kharaj" className="myimg" />
        </div>
        <div className="myimg2_container">
          <img src="images/kharaj2.jpg" alt="kharaj" className="myimg2"/>
          <h2 className="name2">Kharaj Chakraborty</h2>
        </div>
    </div>
    </>
  )
}

export default About