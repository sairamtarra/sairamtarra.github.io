import data from '../data';
import {FaPhone, FaEnvelope} from "react-icons/fa";
import './Hero.css';

const Hero = () => {
  const { personal } = data;
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">{personal.name}</h1>
          <h2 className="hero-role">{personal.role}</h2>
          <p className="hero-subtitle">{personal.subtitle}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Projects →</a>
            <a href="#contact" className="btn btn-outline">Contact Me →</a>
          </div>
          <div className="hero-contact">
            <span className="contact-item">
              <FaPhone className="contact-icon" />
              {personal.phone}
              </span>
            <a href={`mailto:${personal.email}`} 
            className="contact-item">
              <FaEnvelope className="contact-icon" />
              {personal.email}
              </a>
          </div>
        </div>
        <div className="hero-image">
            <img src={personal.profilePic} alt="Sairam Tarra"
            className="profile-pic" />
          </div>
        </div>
    </section>
  );
};

export default Hero;