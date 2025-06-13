import React from 'react';
import '../css/MyWork.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    key: 'legacy-modernization',
    title: 'Legacy System Modernization',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    alt: 'Legacy system modernization',
  },
  {
    key: 'buy2',
    title: 'Buy2 (Online Marketplace)',
    img: 'https://besedo.com/wp-content-ext/uploads/2022/05/besedo-top-online-marketplaces-2022-jpg-webp.webp',
    alt: 'Online marketplace',
  },
  {
    key: 'vehicle-agency',
    title: 'Vehicle Agency',
    img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80',
    alt: 'Car dealership',
  },
  {
    key: 'matchitup',
    title: 'MatchItUp',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
    alt: 'Lesson',
  },
  {
    key: 'color-analyzer',
    title: 'Color Analyzer Camera',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    alt: 'Color analyzer',
  },
];

function MyWork() {
  return (
    <section className="mywork-section">
      <h2>My Work</h2>
      <div className="mywork-projects">
        {projects.map((project) => (
          <Link
            key={project.key}
            className="mywork-card"
            to={`/project/${project.key}`}
            tabIndex={0}
            aria-label={`Go to ${project.title}`}
            style={{ textDecoration: 'none' }}
          >
            <img src={project.img} alt={project.alt} className="mywork-img" />
            <div className="mywork-title">{project.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default MyWork; 