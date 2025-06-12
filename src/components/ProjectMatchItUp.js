import React from 'react';

function ProjectMatchItUp() {
  return (
    <section className="project-section" style={{ textAlign: 'center', maxWidth: 700, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 32 }}>
      <img
        src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=700&q=80"
        alt="Lesson"
        style={{ width: '60%', maxWidth: 340, borderRadius: 10, marginBottom: 24, boxShadow: '0 1px 8px rgba(0,0,0,0.08)' }}
      />
      <h2 style={{ fontWeight: 800, color: '#1a237e', marginBottom: 18 }}>MatchItUp</h2>
      <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: 18 }}>
        MatchItUp is an app for connecting students with private tutors, allowing each student to find a suitable teacher by subject, level, and location. The system includes a smart matching engine, profiles for teachers and students, an internal messaging system, and easy lesson scheduling.
      </p>
      <ul style={{ display: 'inline-block', textAlign: 'left', fontSize: '1.05rem', color: '#222', margin: '0 auto', padding: 0, listStyle: 'disc inside', lineHeight: 1.7 }}>
        <li>Search for tutors by subject, level, and location</li>
        <li>Personal profiles for teachers and students</li>
        <li>Internal messaging and lesson scheduling</li>
        <li>Developed in Java (Android)</li>
      </ul>
    </section>
  );
}

export default ProjectMatchItUp; 