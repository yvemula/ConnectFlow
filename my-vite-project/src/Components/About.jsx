import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-main">
        <h1>Welcome to ConnectFlow</h1>
        <p>
          ConnectFlow is a revolutionary messaging platform that integrates
          advanced AI features to enhance your conversations. Our AI
          intelligently determines the tone and emotion of your chats, offering
          detailed message suggestions and insightful reactions in real time.
        </p>
        <p>
          In addition to standard messaging, ConnectFlow supports a variety of
          file types—whether you need to share PDFs, PNG images, or other media,
          we've got you covered.
        </p>
      </div>
      <div className="about-sidebar">
        <div className="info-box">
          <h3>Creators</h3>
          <p>Aliza Virji and Yathin Vemula</p>
        </div>
        <div className="info-box">
          <h3>Contact</h3>
          <p>Email: TBD </p>
        </div>
        <div className="info-box">
          <h3>Created In</h3>
          <p>March 2025</p>
        </div>
      </div>
    </div>
  );
};

export default About;
