import React from 'react';
import '../styles/components/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src="/path-to-profile-picture.jpg" alt="João Ramalho Sampaio" className="profile-picture" />
      <h2>Desenvolvedor de Software</h2>
      <div className="contact-info">
        <p>Email: j.ramalho@livecom</p>
        <p>Phone: +55 11 99828-9081</p>
        <p>Birth Date: 02/06/2004</p>
      </div>
      <div className="social-links">
        <a href="https://br.linkedin.com/in/joão-ramalho-sampaio-3a1a75228/pt" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Ramalhin" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </aside>
  );
};

export default Sidebar;