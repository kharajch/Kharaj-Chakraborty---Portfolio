"use client"
import Card from "./components/Card"
const Projects = () => {

  const CardItems = [];
  const project_details = [
    {
      name: "Kharaj Chakraborty---Portfolio",
      lang: ["NextJS", "EmailJS", "AnimistaCSS"],
      repo: `https://github.com/kharajch/Kharaj-Chakraborty---Portfolio`,
      img: "Portfolio.png",
      details: `Kharaj Chakraborty---Portfolio is a modern, responsive personal portfolio website built to showcase web development skills and projects. Built with cutting-edge technologies including Next.js, React, and MongoDB.`,

    },
    {
      name: "kharajch--PlayMusic",
      lang: ["NextJS"],
      repo: `https://github.com/kharajch/kharajch---PlayMusic`,
      img: "PlayMusic.png",
      details: `kharajch---PlayMusic is a modern, full-featured music player and discovery web application built with Next.js and React. Browse, search, and play songs with advanced filtering capabilities by language, genre, and artist.`,

    },
    {
      name: "kharajch--MindMatters",
      lang: ["HTML", "CSS", "JS", "Haiku 4.5"],
      repo: `https://github.com/kharajch/kharajch---MindMatters`,
      img: "MindMatters.png",
      details: `Mind Matters provides a comprehensive mental health assessment tool that helps users understand their emotional and psychological well-being. The application guides users through a series of detailed questions and generates personalized results based on their responses.`,

    },
  ]

  for (let i = 0; i < project_details.length; i++) {
    CardItems.push(<Card
          name={project_details[i].name}
          lang={project_details[i].lang}
          repo={project_details[i].repo}
          img={project_details[i].img}
          details={project_details[i].details} 
          key = {i} />);
    
  }

  return (
    <>
      <h1 className="heading" id="Projects">Projects</h1>

      <div className="projects_container hidden">

        {CardItems}

      </div>
    </>
  )
}
export default Projects