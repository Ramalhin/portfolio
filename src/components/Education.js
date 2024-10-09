import React from 'react';
import '../styles/components/Education.css';

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="formal-education">
        <h3>Formal Education</h3>
        <div className="education-item">
          <h4>Universidade Anhembi Morumbi</h4>
          <p>Bachelor's in Computer Science</p>
          <p>February 2022 - December 2025 (Expected)</p>
        </div>
      </div>
      <div className="complementary-courses">
        <h3>Complementary Courses</h3>
        <ul>
          <li>Generative AI for Executives - Fundamentals</li>
          <li>AWS Lambda Foundations</li>
          <li>Comprehensive Python Course: From Basics to Advanced</li>
          <li>RESTful APIs from 0 to AWS with Spring Boot 3, Java, and Docker</li>
          <li>English for IT - B2 Level</li>
          <li>Bootcamp Claro - Java 18 with Spring Boot 3</li>
          <li>Six Sigma - White Belt</li>
          <li>Machine Learning Specialist Training (In progress)</li>
          <li>Java Developer Training</li>
          <li>Microsoft Azure Advanced</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;