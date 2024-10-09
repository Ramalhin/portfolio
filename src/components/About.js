import React from 'react';
import '../styles/components/About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I'm João Ramalho Sampaio, a passionate Software Developer with a focus on Machine Learning.
        Currently pursuing a degree in Computer Science at Universidade Anhembi Morumbi, I'm set to graduate in December 2025.
      </p>
      <p>
        I'm ambitious, engaged, and constantly developing both my soft and hard skills. My goal is to excel in software development
        and machine learning, creating innovative solutions that make a difference.
      </p>
      <h3>Profile</h3>
      <ul>
        <li>Ambitious and engaged</li>
        <li>Continuously developing soft and hard skills</li>
        <li>Proficient in English (B2 level)</li>
        <li>Experienced with TDD, Design Patterns, and Agile methodologies</li>
        <li>Knowledgeable in S.O.L.I.D principles</li>
      </ul>
    </section>
  );
};

export default About;