import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Skills.css"; // Make sure Skills.css styles the progress bars and layout

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const technicalSkills = [
    { skill: "Java", level: "75%" },
    { skill: "MySQL", level: "60%" }, 
    { skill: "HTML & CSS", level: "70%" },
    { skill: "JavaScript (Basic)", level: "50%" },
    { skill: "C++", level: "50%" },
    { skill: "Bootstrap", level: "60%" },
    { skill: "React", level: "65%" },
    { skill: "Node.js", level: "65%" },
    { skill: "Python", level: "50%" },
    { skill: "MongoDB", level: "60%" },
    { skill: "Git", level: "60%" },
  ];

  const softSkills = [
    "Problem-Solving",
    "Teamwork",
    "Adaptability",
    "Communication",
    "Critical Thinking",
    "Collaboration",
    "Time Management",
    "Creativity",
    "Emotional Intelligence",
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <div className="skills-box">
          <h2 className="section-heading text-center mb-5" data-aos="fade-up">
            Skills
          </h2>

          <div className="row">
            {/* Technical Skills */}
            <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-right">
              <h4 className="skills-title mb-4">Technical Skills</h4>
              {technicalSkills.map((item, index) => (
                <div key={index} className="mb-4 skill-wrapper">
                  <strong className="skill-name">{item.skill}</strong>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: item.level }}
                      aria-valuenow={parseInt(item.level)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {item.level}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="col-md-6" data-aos="fade-left">
              <h4 className="skills-title mb-4">Soft Skills</h4>
              <ul className="list-group soft-skills">
                {softSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="list-group-item soft-skill-item d-flex align-items-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
