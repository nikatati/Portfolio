import React from 'react';
import '../css/Header.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Welcome to Nika Tatikishvili's Portfolio</h1>
        <p>Full Stack Developer | JavaScript | React | C# | ASP.NET </p>
      </div>
    </header>
  );
}
  
export default Header;
