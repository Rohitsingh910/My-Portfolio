import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./About.css";
import developerImg from "../assets/developer.jpg";

const About = () => {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-content-box" data-aos="fade-up">
        <h2 className="about-heading">About Me</h2>
        <div className="about-details">
          <div className="about-image-wrapper" data-aos="fade-right">
            <img src={developerImg} alt="Developer" className="about-image" />
          </div>
          <div className="about-text-wrapper" data-aos="fade-left">
            <p className="about-description">
              Hello! I'm <strong>Rohit</strong>,a dedicated Software Developer with a strong background in Core Java, Spring Boot, and MySQL. I specialize in building efficient backend systems and have hands-on experience with React.js, HTML, and JavaScript for creating responsive, user-friendly interfaces.
            </p>
            <div className="about-info">
              <p>
                <strong>Skills:</strong> Java, C Programming, Python, HTML & CSS,
                JavaScript, React JS, Node JS(Basic), MongoDB, MySQL, Bootstrap,
                Tailwind CSS, Git & GitHub.
              </p>
              <p>
                <strong>Education:</strong> B.E. in Computer Science, Dr. Bhimrao Ambedkar Univerity, Agra, India
              </p>
              <p>
                <strong>Course:</strong> NPTEL: Data Structures & Algorithms using Java – 71% 
              </p>
              <p>
                <strong>Hobbies:</strong> Coding, Traveling, Watching Cricket etc.
              </p>
            </div>
            <div className="about-buttons">
              {/* Link to contact section if available */}
              <a href="#contact" className="about-button" data-aos="fade-up" data-aos-delay="200">
                Contact Me
              </a>
              <button
                className="about-button resume"
                data-aos="fade-up"
                data-aos-delay="200"
                onClick={() => setShowResume(!showResume)}
              >
                {showResume ? "Hide Resume" : "View Resume"}
              </button>
            </div>
            {showResume && (
              <div className="resume-box" data-aos="fade-up">
                <iframe
                  src="/Rohit-Resume.pdf"
                  title="Rohit Resume"
                  width="100%"
                  height="500px"
                  style={{ border: "none" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
