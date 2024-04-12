import React from 'react';
import '../styles/AboutSection.css'; // Importing the CSS file for styling

const AboutSection = () => {
  return (
    <div className="about-section">
      <h2 className="about-heading">About Me</h2>
      <div className="about-content">
        <p>
          I'm a passionate web developer dedicated to creating stunning and
          intuitive user experiences. With expertise in <span className="highlight">ReactJS</span> and <span className="highlight">Spring Boot</span>, I
          bring creativity and technical proficiency to every project I undertake.
        </p>
        <p>
          My journey in web development started <span className="highlight">X years</span> ago, and since then, I've
          been constantly learning and adapting to new technologies and trends in
          the industry.
        </p>
      </div>
      <button className="cta-button">Learn More</button>
    </div>
  );
};

export default AboutSection;
