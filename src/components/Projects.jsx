import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Projects.css"; // Ensure you have a separate CSS file for styles

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [

     {
       title: "Portfolio Website",
       description: "My personal portfolio website showcasing my skills and projects.",
       link: "https://rohitsingh910.github.io/My-Portfolio/",
     },

     {
       title: "Let's Go - A Tourism Website Application",
       description: "A Tourism Website Application helping for travelling using HTML, Tailwind CSS, JavaScript.",
       link: "https://rohitsingh910.github.io/Let-s-Go-tourism-Website/",
     },
   
     
     {
       title: "Airline Management System",
       description: "A Airline Management System Application helping for Flight booking/Cancellation and Admin & user Authentication using Java Swinga and MySQL.",
       link: "https://github.com/Rohitsingh910/Airline-Management-System",
     },

   // {
     // title: "Weather App",
      //description: "A weather forecasting app using html css and javascript.",
     // link: "https://amrit22oct.github.io/weather_application/",
    //},
   // {
     // title: "Snake Game",
      //description: "A snake game to enhance the coding logic in the javascript.",
      //link: "https://amrit22oct.github.io/snake_game/",
    //},

    {
      title: "Car rental Service Website",
      description: "A real-time Car Rental Service application using React",
      link: "https://github.com/Rohitsingh910/Car-rental-website",
    },
   // {
     // title: "Real-Time Chat App",
      //description: "A real-time chat application using Node.js, Socket.io, and React and mongoDB.",
      //link: "https://chit-chat-y7r4.onrender.com",
    //},

    //{
      //title: "chatbot",
      //description: "A real-time chat application using Node.js, Socket.io, and React.",
     // link: "https://jarvis-jpyh.onrender.com",
    //},
  ];


  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <div className="projects-box">
          <h2 className="section-heading text-center mb-5" data-aos="fade-up">
            Projects
          </h2>
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-md-4 mb-4" key={index} data-aos="fade-up">
                <div className="card project-card h-100 shadow-lg">
                  <div className="card-body text-center">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a
                      href={project.link}
                      className="btn btn-outline-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
