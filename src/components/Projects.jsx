import Card from "./components/Card"
import "./css/Projects.css"

const Projects = () => {
  return (
    <>
      <h1 className="heading" id="Projects">Projects</h1>

      <div className="projects_container hidden">

        <Card img="Mind Matters.png" lang = {["Kotlin", "HTML", "CSS", "JS"]} name="Mind Matters" details={`This interactive personality assessment quiz app features 17 questions with varying option formats
                    designed to evaluate different aspects of your personality and behavior. The elegantly designed app
                    presents questions in a modern gradient interface with smooth animations and progress tracking. As
                    you answer each question, your selections accumulate points that ultimately categorize your results
                    as Good, Moderate, or Severe, providing insight into your psychological patterns and tendencies. The
                    responsive design ensures an engaging experience across all devices, complete with intuitive
                    navigation and a restart option for repeated use.`} repo={`https://github.com/kharajch/Mind-Matters--Android`} />

        <Card img="c.jpg" lang = {["C Language"]} name="Reciept Generator" details={`This interactive personality assessment quiz app features 17 questions with varying option formats
                    designed to evaluate different aspects of your personality and behavior. The elegantly designed app
                    presents questions in a modern gradient interface with smooth animations and progress tracking. As
                    you answer each question, your selections accumulate points that ultimately categorize your results
                    as Good, Moderate, or Severe, providing insight into your psychological patterns and tendencies. The
                    responsive design ensures an engaging experience across all devices, complete with intuitive
                    navigation and a restart option for repeated use.`} repo={`https://github.com/kharajch/Mind-Matters--Android`} />

      </div>
    </>
  )
}
export default Projects