import React from 'react';
import '../styles/components/Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Telegram Bot</h3>
        <p>An automatic channel promotion bot for Telegram, allowing users to register their channels for inclusion in promotion lists organized by categories.</p>
        <p>Technologies: Python, MercadoPago, Telegram-api, MongoDB</p>
        <a href="https://github.com/Ramalhin/Telegram-Bot-Python" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-item">
        <h3>RESTful API</h3>
        <p>Development of a RESTful API with Docker support and deployment on an Amazon ECS cluster, implementing a continuous integration pipeline involving GitHub, GitHub Actions, and an ECS Cluster on Amazon AWS.</p>
        <p>Technologies: Spring framework, Amazon AWS, Docker</p>
        <a href="https://github.com/Ramalhin/Rest-with-Spring-Boot-and-Java-erudio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-item">
        <h3>Educational Financial ChatBox</h3>
        <p>A university extension project where we worked as a team to develop a complete chat system, with market adherence.</p>
        <p>Status: In progress</p>
      </div>
    </section>
  );
};

export default Projects;