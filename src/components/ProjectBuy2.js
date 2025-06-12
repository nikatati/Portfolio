import React from 'react';

function ProjectBuy2() {
  return (
    <section className="project-section" style={{ textAlign: 'center', maxWidth: 700, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 32 }}>
      <img
        src="https://besedo.com/wp-content-ext/uploads/2022/05/besedo-top-online-marketplaces-2022-jpg-webp.webp"
        alt="Online marketplace"
        style={{ width: '60%', maxWidth: 340, borderRadius: 10, marginBottom: 24, boxShadow: '0 1px 8px rgba(0,0,0,0.08)' }}
      />
      <h2 style={{ fontWeight: 800, color: '#1a237e', marginBottom: 18 }}>Buy2 (Online Marketplace)</h2>
      <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: 18 }}>
        Buy2 is an online marketplace platform, similar to Yad2, that allows users to post, search, and purchase new and second-hand products easily and conveniently. The system features a user-friendly interface, smart filtering, personal ad management, and a focus on user privacy and security. The project simulates a modern online store with an emphasis on user experience, security, and ease of use.
      </p>
      <ul style={{ display: 'inline-block', textAlign: 'left', fontSize: '1.05rem', color: '#222', margin: '0 auto', padding: 0, listStyle: 'disc inside', lineHeight: 1.7 }}>
        <li>Post ads, advanced search and filtering</li>
        <li>User and ad management</li>
        <li>Notifications, messaging, and privacy protection</li>
        <li>Developed with JavaScript, React, Node.js</li>
      </ul>
    </section>
  );
}

export default ProjectBuy2; 