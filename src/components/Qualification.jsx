import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Qualification.css"; // Ensure you have styles in a separate CSS file

const Qualification = () => {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="qualification" className="qualification-section">
      <div className="qualification-container">
        <h2 className="qualification-heading" data-aos="fade-up">
          My Qualifications
        </h2>

        {/* Qualification Item */}
        <div className="qualification-item" data-aos="fade-up" data-aos-delay="300">
          <div className="qualification-content">
            <h3 className="highlighted-text">
              Bachelor of Engineering in Computer Science & Engineering
            </h3>
            <p><strong>University:</strong> Institute of Engineering and Technology, Agra</p>
            <p><strong>Graduation Year:</strong> 2021 – 2025</p>
            <p><strong>Key Subjects:</strong> Data Structures & Algorithms, Artificial Intelligence, Software Engineering, Web Development</p>
            <p><strong>Location:</strong> Agra, UP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
