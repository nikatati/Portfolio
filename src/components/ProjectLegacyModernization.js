import React from 'react';

function ProjectLegacyModernization() {
  return (
    <section className="project-section" style={{ textAlign: 'center', maxWidth: 700, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 32 }}>
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
        alt="Legacy system modernization"
        style={{ width: '60%', maxWidth: 340, borderRadius: 10, marginBottom: 24, boxShadow: '0 1px 8px rgba(0,0,0,0.08)' }}
      />
      <h2 style={{ fontWeight: 800, color: '#1a237e', marginBottom: 18 }}>Legacy System Modernization</h2>
      <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: 18 }}>
        Led a migration and conversion project of an organizational information system developed in AS/400 RPG environment to a modern Web system based on .NET on the server side and React on the client side.
      </p>
      <h3 style={{ fontWeight: 700, color: '#183153', margin: '24px 0 10px' }}>My Role in the Project</h3>
      <ul style={{ display: 'inline-block', textAlign: 'left', fontSize: '1.05rem', color: '#222', margin: '0 auto 18px', padding: 0, listStyle: 'disc inside', lineHeight: 1.7 }}>
        <li>In-depth analysis of existing code and understanding of business logic while maintaining full compatibility with the source system</li>
        <li>Design of a new service-based system architecture (API-first), with separate layers for data, business logic, and user interface</li>
        <li>Mapping of existing tables and models and converting them to a modern relational database schema (SQL Server)</li>
        <li>Writing server-side services in C#/.NET Core, including permission controls, user management, and error handling</li>
        <li>Development of a responsive user interface in React using Redux for state management and connecting to the APIs</li>
        <li>Performing quality assurance (QA) testing, comparing results with the old system and ensuring data accuracy</li>
        <li>Implementing comprehensive documentation for the new system for future maintenance and team training</li>
      </ul>
      <h3 style={{ fontWeight: 700, color: '#183153', margin: '24px 0 10px' }}>Technical Challenges</h3>
      <ul style={{ display: 'inline-block', textAlign: 'left', fontSize: '1.05rem', color: '#222', margin: '0 auto 18px', padding: 0, listStyle: 'disc inside', lineHeight: 1.7 }}>
        <li>Transition from monolithic and outdated technology to a modern microservices-based environment</li>
        <li>Preserving existing business logic while modernizing the user interface</li>
        <li>Adapting data format and representation between very different platforms</li>
      </ul>
      <h3 style={{ fontWeight: 700, color: '#183153', margin: '24px 0 10px' }}>Technologies</h3>
      <ul style={{ display: 'inline-block', textAlign: 'left', fontSize: '1.05rem', color: '#222', margin: '0 auto 18px', padding: 0, listStyle: 'disc inside', lineHeight: 1.7 }}>
        <li><b>Source:</b> AS400, RPG (Reading and Analysis)</li>
        <li><b>New:</b> .NET Core, C#, Web API, React, Redux, TypeScript, SQL Server</li>
        <li><b>Tools:</b> Git, CI/CD</li>
      </ul>
      <h3 style={{ fontWeight: 700, color: '#183153', margin: '24px 0 10px' }}>Project Scope</h3>
      <p style={{ fontSize: '1.05rem', color: '#222', marginBottom: 0 }}>
        A 10-month project, working in collaboration with an AS400 team for assistance, where I handled the entire project implementation.
      </p>
    </section>
  );
}

export default ProjectLegacyModernization; 