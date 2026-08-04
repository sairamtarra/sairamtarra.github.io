import data from '../data';
import './Experience.css';

const Experience = () => {
  const { experience } = data;
  return (
    <section id="experience" className="experience section">
      <h2 className="section-tag">EXPERIENCE</h2>
      <div className="experience-list">
        {experience.map((job, index) => (
          <div key={index} className="experience-card">
            <h3 className="exp-title">{job.title}</h3>
            <p className="exp-company">{job.company} <span className="exp-location">{job.location}</span></p>
            <p className="exp-date">{job.date}</p>
            <ul className="exp-desc">
              {job.description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;