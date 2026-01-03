"use client"
import Card from "./components/Card"
const Projects = () => {

  const project_details = [{
    name: "Mind Matters",
    lang: ["Kotlin", "HTML", "CSS", "JS"],
    repo: `https://github.com/kharajch/Mind-Matters--Android`,
    img: "Mind Matters.png",
    details: `This interactive personality assessment quiz app features 17 questions with varying option formats
                    designed to evaluate different aspects of your personality and behavior. The elegantly designed app
                    presents questions in a modern gradient interface with smooth animations and progress tracking. As
                    you answer each question, your selections accumulate points that ultimately categorize your results
                    as Good, Moderate, or Severe, providing insight into your psychological patterns and tendencies. The
                    responsive design ensures an engaging experience across all devices, complete with intuitive
                    navigation and a restart option for repeated use.`,

  }]

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