import React from 'react';

function ProjectColorAnalyzer() {
  return (
    <section className="project-section" style={{ textAlign: 'center', maxWidth: 700, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 32 }}>
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=700&q=80"
        alt="Color analyzer"
        style={{ width: '60%', maxWidth: 340, borderRadius: 10, marginBottom: 24, boxShadow: '0 1px 8px rgba(0,0,0,0.08)' }}
      />
      <h2 style={{ fontWeight: 800, color: '#1a237e', marginBottom: 18 }}>Color Analyzer Camera</h2>
      <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: 18 }}>
        Color Analyzer Camera is an app that lets you open your phone's camera and analyze in real time the RGB color ratios of what is being captured. The app displays color values clearly, making it suitable for designers, developers, and anyone who needs to analyze colors on the go.
      </p>
      <ul style={{ display: 'inline-block', textAlign: 'left', fontSize: '1.05rem', color: '#222', margin: '0 auto', padding: 0, listStyle: 'disc inside', lineHeight: 1.7 }}>
        <li>Real-time color analysis from the camera</li>
        <li>Clear display of RGB values</li>
        <li>Simple and user-friendly interface</li>
        <li>Developed in JavaScript</li>
      </ul>
    </section>
  );
}

export default ProjectColorAnalyzer; 