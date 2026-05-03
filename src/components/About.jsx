import data from '../data';
import './About.css';

const About = () => {
  const { about } = data;
  return (
    <section id="about" className="about section">
      <h2 className="section-tag">ABOUT ME</h2>
      <div className="about-row">
        <div className="about-text">
          <h3 className="section-title">Get to know me</h3>
          <p>{about.description}</p>
          <div className="highlights">
            {about.highlights.map((item, i) => (
              <span key={i} className="highlight-badge">{item}</span>
            ))}
          </div>
        </div>
        <div className="about-image">
          <img src={about.laptopImage} alt="Laptop with code" className="laptop-img" />
        </div>
      </div>
    </section>
  );
};

export default About;