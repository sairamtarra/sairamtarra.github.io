import data from '../data';
import './Skills.css';

const Skills = () => {
  const { skills } = data;
  
  const renderSection = (title, items) => (
  <div className="skills-group">
    <h4 className="skills-group-title">{title}</h4>
    
    <div className="skills-grid">
      {items.map((skill, idx) => (
        <div key={idx} className="skill-card">
          <img src={skill.icon} alt={skill.name} />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
  );
  
  return (
  <section id="skills" className="skills section">
    <h2 className="section-tag">SKILLS</h2>
    <h3 className="section-title">Technologies I work with</h3>
    
    {renderSection("Languages & Databases", skills.languages)}
    {renderSection("Frameworks & Libraries", skills.frameworks)}
    {renderSection("Tools & Cloud", skills.tools)}
  </section>
  );
};

export default Skills;