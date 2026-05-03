import { useState } from 'react';
import data from '../data';
import './Projects.css';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? data.projects : data.projects.slice(0, 3);

  return (
    <section id="projects" className="projects section">
      <h2 className="section-tag">PROJECTS</h2>
      <div className="projects-header">
        <h3 className="section-title">Things I've built</h3>
        {data.projects.length > 3 && (
          <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'View All Projects →'}
          </button>
        )}
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h4 className="project-name">{project.title}</h4>
            <p className="project-desc">{project.description}</p>
            <div className="tech-badges">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;