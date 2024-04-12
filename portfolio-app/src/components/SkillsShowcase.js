// SkillsShowcase.js

import React from 'react';
import '../styles/SkillsShowcase.css';

const SkillsShowcase = () => {
  return (
    <section className="skills-showcase">
      <h2 className="section-title">Skills Showcase</h2>
      <div className="skills-list">
        <div className="skill">
          <h3 className="skill-title">Frontend Development</h3>
          <div className="skill-bar">
            <div className="skill-progress frontend">90%</div>
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">Backend Development</h3>
          <div className="skill-bar">
            <div className="skill-progress backend">85%</div>
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">UI/UX <br/> Designing</h3>
          <div className="skill-bar">
            <div className="skill-progress backend">95%</div>
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">QA <br/> Testing</h3>
          <div className="skill-bar">
            <div className="skill-progress backend">98%</div>
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">DevOps <br/> Cloud Computing</h3>
          <div className="skill-bar">
            <div className="skill-progress backend">80%</div>
          </div>
        </div>
        {/* Add more skills here */}
      </div>
    </section>
  );
}

export default SkillsShowcase;
