import React from 'react';
import './Works.css';

const skills = [
  { name: 'HTML', description: 'Semantic, accessible markup.' },
  { name: 'CSS', description: 'Responsive layouts and animations.' },
  { name: 'JavaScript', description: 'Dynamic, interactive logic.' },
  { name: 'React', description: 'Component-based UI development.' },
  { name: 'MySQL', description: 'Database management and querying.' },
  { name: 'Figma', description: 'UI/UX design and prototyping.' },
  { name: 'Git', description: 'Version control and collaboration.' },
  { name: 'Selenium', description: 'Manual and Automation Testing' },
];

const Works = ({ theme }) => {
  return (
    <section className={`work-section ${theme}`}>
      <h2 className="work-title">What I Can Do🖱️</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
