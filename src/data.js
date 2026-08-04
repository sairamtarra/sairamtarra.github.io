import profileImg from "./assets/profile.png";
import laptopImage from "./assets/laptop.jpg";
import html from "./assets/html5.png";
import css from "./assets/css3.png";
import springboot from "./assets/springboot.png";
import springsecurity from "./assets/springsecurity.png";
import git from "./assets/git.png";
import github from "./assets/github.png";
import mysql from "./assets/mysql-logo-1.png";
import javascript from "./assets/javascript.png";
import bootstrap from "./assets/bootstrap.png";
import reactjs from "./assets/react.svg";
import vscode from "./assets/vscode.png";
import eclipse from "./assets/eclipse.png";
import maven from "./assets/Apache Maven.png";
import postman from "./assets/Postman.png";
import jpa from "./assets/spring-data-jpa.webp";
import hibernate from "./assets/Hibernate.png";
import java from "./assets/java.png";
import ecommerce from "./assets/multivendor-ecommerce.jpg";
import banking from "./assets/digital-banking.jpg";
import ai from "./assets/ai-assist.jpg";
import oracle from "./assets/java.png";
import tcs from "./assets/tcs_ion_logo.jpeg";
import aws from "./assets/aws-cloud.png";

const data = {
  personal: {
    name: "Sairam Tarra",
    firstName: "Home",
    role: "Java Developer & Faculty Trainee",
    subtitle:
      "I build responsive, user‑friendly backend systems and enjoy teaching future developers.",
    phone: "+91 9381092195",
    email: "sairamtarra02@gmail.com",
    linkedin: "https://linkedin.com/in/sairamtarra",
    github: "https://github.com/sairamtarra",
    resumeLink: "https://drive.google.com/file/d/1XcBUJ01RvgJKLeWsixsSUrYUBN0EUojc/view?usp=drivesdk",
    profilePic: profileImg,
  },
  about: {
    description:
      "I'm a passionate Java Developer who loves building backend applications that solve real‑world problems. I enjoy learning new technologies and turning ideas into reality.",
    highlights: ["Clean Code", "Responsive", "Problem Solver"],
    laptopImage: laptopImage,
  },
  // New Experience section added to align with the video instructions
  experience: [
    {
      title: "Software Development Faculty Trainee",
      company: "NxtWave - Hyderabad",
      location: "Hyderabad",
      date: "2026 - Present",
      description: [
        "Teaching and mentoring students in Frontend Technologies and core programming concepts.",
        "Developing curriculum materials and conducting live coding sessions for better student understanding.",
        "Collaborating with the Instructors team to create a robust learning environment."
      ]
    },
    {
      title: "Active Member & Mentor",
      company: "Java Club (INTEC Program)",
      location: "Gayatri Vidya Parishad College",
      date: "2023 - 2025",
      description: [
        "Mentored 20+ junior students on core Java concepts, OOPs, and problem-solving strategies.",
        "Conducted coding sessions and peer code reviews to foster a collaborative learning environment."
      ]
    }
  ],
  // Only 3 finished projects kept, as requested
  projects: [
    {
      id: 1,
      title: "Multivendor E-Commerce Backend",
      description:
        "As the sole developer, I built backend modules for product management, cart, orders, and users using Spring Boot. Used Hibernate and JPA for database operations and tested with Postman.",
      tech: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "MySQL", "Maven"],
      image: ecommerce,
    },
    {
      id: 2,
      title: "Expense Manager",
      description:
        "As the sole developer, I built a complete CRUD expense tracking backend with Spring Boot to manage daily income and expenses, connected to MySQL.",
      tech: ["Java", "Spring Boot", "Spring Data JPA", "REST APIs", "MySQL", "Maven"],
      image: banking, // Reusing existing images so you don't have to download new ones
    },
    {
      id: 3,
      title: "Microservices – Order & Payment Service",
      description:
        "As the sole developer, I built a microservices-based application with separate Order and Payment services. Used OpenFeign for inter-service communication and followed REST-based architecture.",
      tech: ["Java", "Spring Boot", "Spring Data JPA", "OpenFeign", "REST APIs", "Maven"],
      image: ai, // Reusing existing images
    },
  ],
  skills: {
    languages: [
      { name: "Java", icon: java },
      { name: "MySQL", icon: mysql  },
      { name: "HTML5", icon: html  },
      { name: "CSS3", icon: css  },
      { name: "JavaScript", icon: javascript  }
    ],
    
    frameworks: [
      { name: "Spring Boot", icon: springboot  },
      { name: "Spring Security", icon: springsecurity  },
      { name: "Spring Data JPA", icon: jpa  },
      { name: "Hibernate", icon: hibernate  },
      { name: "React.js", icon: reactjs  },
      { name: "Bootstrap", icon: bootstrap  }
    ],
    
    tools: [
      { name: "Git", icon: git  },
      { name: "GitHub", icon: github  },
      { name: "Postman", icon: postman  },
      { name: "Apache Maven", icon: maven  },
      { name: "Eclipse IDE", icon: eclipse  },
      { name: "VS Code", icon: vscode  }
    ]
  },

  education: {
    degree: "Bachelor of Technology",
    branch: "Electronics and Communication Engineering",
    college: "Gayatri Vidya Parishad College for Degree and PG Courses (A)",
    duration: null, // Removed exact graduation dates per video instructions
    cgpa: "8.01 CGPA"
  },

  certifications: [
    {
      title: "AWS Cloud Foundations",
      issuer: "AWS Academy",
      icon: aws
    },
    {
      title: "Oracle Java Foundations",
      issuer: "Oracle",
      icon: oracle
    },
    {
      title: "Communication Skills",
      issuer: "TCS iON",
      icon: tcs
    },
  ],
};

export default data;