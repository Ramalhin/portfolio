import React from 'react';
import '../styles/components/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Java 21", "Python 3"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["Spring Boot 3", "Spring Security", "Spring Web", "Spring JPA", "Hibernate", "JWT", "Junit 5 / Mockito", "Django 4.2", "PySide6", "PyMongo", "TensorFlow", "Scikit-Learn", "Pandas", "Keras"]
    },
    {
      name: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "GitHub Actions"]
    },
    {
      name: "Databases",
      skills: ["MySQL 8.0", "MongoDB 7.0"]
    },
    {
      name: "Methodologies & Concepts",
      skills: ["TDD", "Design Patterns", "Agile (Scrum, Kanban)", "S.O.L.I.D"]
    },
    {
      name: "Languages",
      skills: ["English (B2 level)"]
    }
  ];

  return (
    <section className="skills">
      <h2>Skills & Technologies</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.name}</h3>
          <ul>
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;