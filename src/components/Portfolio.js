import React from 'react';
import Project from './Project';
import projectsData from './projectsData.json';

const Portfolio = () => (
  <div className="container my-5">
    <h1 className="text-center mb-5">My Projects</h1>
    <div className="row">
      {projectsData.map((project) => (
        <div className="col-lg-4 col-md-6 mb-4" key={project.title}>
          <Project {...project} />
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;
