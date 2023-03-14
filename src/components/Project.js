import React from 'react';
import './Project.css';

const Project = ({ title, deployed_version, github_repo, screenshot }) => (
  <div className="project">
    <div className="project-img">
      <img src={process.env.PUBLIC_URL + screenshot} alt={`Screenshot of ${title}`} />
    </div>
    <div className="project-details">
      <h2>{title}</h2>
      <div className="project-links">
        <a href={deployed_version} target="_blank" rel="noopener noreferrer">View Demo</a>
        <span> | </span>
        <a href={github_repo} target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
  </div>
);

export default Project;
