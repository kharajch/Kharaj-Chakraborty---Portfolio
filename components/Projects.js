"use client"
import Card from "./components/Card"
const Projects = () => {

  const project_details = [
    {
      name: "kharajch--PlayMusic",
      lang: ["NextJS"],
      repo: `https://github.com/kharajch/kharajch---PlayMusic`,
      img: "PlayMusic.png",
      details: `This is a Basic Music Player App, built with Next.js and designed to provide a clean, lightweight audio playback experience. It includes core features such as play, pause, stop, and track navigation, with a simple and intuitive interface that makes browsing and listening effortless. The app leverages Next.js for fast rendering and modular component structure, ensuring maintainability and scalability. Styling is handled with native CSS modules for clarity and isolation, while React hooks manage state and playback logic. This project serves as a practical demonstration of building interactive media applications with modern web technologies, highlighting both functionality and simplicity.`,

    },
  ]

  return (
    <>
      <h1 className="heading" id="Projects">Projects</h1>

      <div className="projects_container hidden">

        <Card
          name={project_details[0].name}
          lang={project_details[0].lang}
          repo={project_details[0].repo}
          img={project_details[0].img}
          details={project_details[0].details} />

      </div>
    </>
  )
}
export default Projects