// ProjectsPortfolio.js

import React from 'react';
import '../styles/ProjectsPortfolio.css';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'm-5.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'm-6.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'm-7.jpg',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'm-8.jpg',
  }, 
   {
    id: 5,
    title: 'Project 5',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'm-9.jpg',
  }
  // Add more projects as needed
];

const ProjectsPortfolio = () => {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-heading">Projects Portfolio</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPortfolio;
