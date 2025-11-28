import React from "react";
import './css/components/projects.css'

const Projects = () => {
  return (
    <div>
      {/* Projects */}
      <h1 className="heading" style={{ marginTop: "200px" }} id="Projects">
        Projects
      </h1>

      <div className="projects_container">
        {/* Project Card 1 */}
        <div className="projects_card">
          <img src="/images/projects/Mind Matters.png" alt="Mind Matters" />
          <h3>Mind Matters</h3>
          <p>
            This interactive personality assessment quiz app features 17 questions with varying option formats
            designed to evaluate different aspects of your personality and behavior. The elegantly designed app
            presents questions in a modern gradient interface with smooth animations and progress tracking. As
            you answer each question, your selections accumulate points that ultimately categorize your results
            as Good, Moderate, or Severe, providing insight into your psychological patterns and tendencies. The
            responsive design ensures an engaging experience across all devices, complete with intuitive
            navigation and a restart option for repeated use.
          </p>
          <div className="card_btn">
            <a href="https://github.com/kharajch/Mind-Matters--Android">
              <button>View Code</button>
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="projects_card">
          <img src="/images/projects/c.jpg" alt="Receipt Generator" />
          <h3>Receipt Generator</h3>
          <p>
            This is a menu-driven C console application designed to generate and manage restaurant receipts. The
            user can either create a new receipt by entering item details, which the program calculates with GST
            and prints to the screen, or view past records. When a new receipt is generated, it is saved as a
            unique, timestamped text file, and its filename is logged into a central index file. The program’s
            viewing function reads this index to show all saved receipts, allowing the user to select and
            display the full content of any specific past bill, though its operation is limited by the use of
            hardcoded file paths.
          </p>
          <div className="card_btn">
            <a href="https://github.com/kharajch/Restaurant-Receipt-Generator">
              <button>View Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;