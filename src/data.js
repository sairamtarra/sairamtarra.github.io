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
    role: "Java Full Stack Developer",
    subtitle:
      "I build responsive, user‑friendly and scalable web applications with clean code and great user experience.",
    phone: "+91 9381092195",
    email: "sairamtarra02@gmail.com",
    linkedin: "https://linkedin.com/in/sairamtarra",
    github: "https://github.com/sairamtarra",
    resumeLink: "https://drive.google.com/file/d/1MJgm2zr9IRs3vyeECJHmao_hbcpqsQIA/view?usp=drivesdk",
    profilePic: profileImg,
  },
  about: {
    description:
      "I'm a passionate Java Developer who loves building backend applications that solve real‑world problems. I enjoy learning new technologies and turning ideas into reality.",
    highlights: ["Clean Code", "Responsive", "Problem Solver"],
    laptopImage: laptopImage,
  },
  projects: [
    {
      id: 1,
      title: "Multi-Vendor E-Commerce",
      description:
        "Full‑stack e‑commerce platform with JWT authentication.",
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "MySQL"],
      image: ecommerce,
    },
    {
      id: 2,
      title: "Digital Banking Platform",
      description:
        "Secure banking backend with transactions & role‑based access.",
      tech: ["Spring Boot", "JPA", "MySQL", "JWT"],
      image: banking,
    },
    {
      id: 3,
      title: "AI Developer Assistant",
      description:
        "AI‑powered backend for code explanation & debugging.",
      tech: ["Spring Boot", "REST APIs", "Spring AI"],
      image: ai,
    },
    // Additional hidden projects
    {
      id: 4,
      title: "ChatApp",
      description: "Real‑time messaging app with rooms and file sharing.",
      tech: ["Socket.io", "React", "Node.js"],
      image: "https://via.placeholder.com/300x200?text=ChatApp",
    },
    {
      id: 5,
      title: "Blogify",
      description: "A full‑stack blogging platform with markdown support.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      image: "https://via.placeholder.com/300x200?text=Blogify",
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
    duration: "2021 - 2025",
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