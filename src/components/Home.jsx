import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, []);

  const messages = ["Hi there!", "I am Rohit", "Welcome to My Website"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[index];
    const speed = isDeleting ? 50 : 100;
    
    if (!isDeleting && text.length < currentMessage.length) {
      setTimeout(() => setText(currentMessage.slice(0, text.length + 1)), speed);
    } else if (isDeleting && text.length > 0) {
      setTimeout(() => setText(text.slice(0, -1)), speed);
    } else {
      setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) setIndex((prev) => (prev + 1) % messages.length);
      }, 1500);
    }
  }, [text, isDeleting, index, messages]);

  return (
    <section
      id="home"
      className="vh-100 d-flex align-items-center justify-content-center"
      style={{  color: "white" }}
      data-aos="fade-up"
    >
      <div
        className="text-center p-5 fade-in"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          border: "2px solid #00FFCC",
          borderRadius: "15px",
          maxWidth: "600px",
          boxShadow: "0px 4px 20px rgba(0, 255, 204, 0.5)",
        }}
      >
        <h1 className="display-4" style={{ color: "#00FFCC", fontWeight: "bold" }}>
          {text}
        </h1>
      </div>
    </section>
  );
};

export default Home;
