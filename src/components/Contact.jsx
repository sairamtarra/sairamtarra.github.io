import { useState } from 'react';
import {FaPhone, FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";
import data from '../data';
import './Contact.css';

const Contact = () => {
  const { personal } = data;
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject=`Message from ${form.name}`;
    const body=`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="contact section">
      <h2 className="section-tag">CONTACT</h2>
      <div className="contact-row">
        <div className="contact-info">
          <h3 className="section-title">Let's work together</h3>
          <p className="contact-intro">
            I'm always open to discussing new opportunities or having a chat.
          </p>
          <div className="contact-details">
            <p>
              <FaPhone className="contact-icon" />{personal.phone}
              </p>

            <p>
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </p>
            
            <p>
              <FaLinkedin className="contact-icon" />
              <a href={personal.linkedin} target="_blank" rel="noreferrer">{personal.linkedin}</a>
            </p>

            <p>
              <FaGithub className="contact-icon" />
              <a href={personal.github} target="_blank" rel="noreferrer">{personal.github}</a>
            </p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn-send">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;