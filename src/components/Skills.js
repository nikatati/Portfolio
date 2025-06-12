import React from 'react';
import '../css/Skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <h2>What I Can Do</h2>
      <div className="skills-block">
        <div className="skills-topic">
          <span className="skills-title">Frontend</span>
          <p>
            I have strong experience in building web interfaces using <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>TypeScript</b>. I enjoy working with modern frameworks like <b>React</b> to create responsive and user-friendly applications.
          </p>
        </div>
        <div className="skills-topic">
          <span className="skills-title">Backend</span>
          <p>
            On the server side, I work with <b>Node.js</b> and <b>Express</b>, and have hands-on experience with <b>REST APIs</b>, <b>MongoDB</b>, <b>SQL</b>, <b>PL/SQL</b>, and <b>C#</b>. I also have experience with <b>ASP.NET Web API</b>, <b>Web Services</b>, and <b>Microservices</b> architectures.
          </p>
        </div>
        <div className="skills-topic">
          <span className="skills-title">Web Development</span>
          <p>
            I am passionate about full stack web development, especially with <b>React</b>, <b>Node.js</b>, and <b>Express</b>. I always strive to write clean, maintainable code and deliver robust solutions.
          </p>
        </div>
        <div className="skills-topic">
          <span className="skills-title">CMS & Tools</span>
          <p>
            I have experience working with <b>Umbraco CMS</b> and am comfortable using <b>Git</b> & <b>GitHub</b> for version control and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills; 