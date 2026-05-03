import data from '../data';
import {FaLinkedin, FaGithub, FaDownload} from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  const { personal } = data;
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          {personal.firstName}
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              <span className="icon"><FaLinkedin/></span>
              <span className="link-text">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href={personal.github} target="_blank" rel="noreferrer">
              <span className="icon"><FaGithub/></span>
              <span className="link-text">GitHub</span>
            </a>
          </li>
          <li>
            <a href={personal.resumeLink} className="btn-resume" target="_blank" rel="noreferrer">
              <FaDownload className="resume-icon"/>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;