import React, { useState } from 'react';
import '../css/Intern.css';

const Intern = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  
  const tabs = [
    { id: 'frontend', label: 'Front-End Developer' },
    { id: 'backend', label: 'Back-End' }
  ];
  
  const internPositions = [
    { title: "Front-End Developer", requirements: "Experience with React, HTML, CSS, JavaScript" },
    { title: "Front-End Developer", requirements: "Experience with React, HTML, CSS, JavaScript" },
    { title: "Front-End Developer", requirements: "Experience with React, HTML, CSS, JavaScript" },
    { title: "Front-End Developer", requirements: "Experience with React, HTML, CSS, JavaScript" }
  ];

  return (
    <div className="intern-container">
      <div className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      
      <div className="tabs">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="intern-list">
        {internPositions.map((position, index) => (
          <div key={index} className="intern-item">
            <h3 className="intern-title">{position.title}</h3>
            <p className="intern-requirements">{position.requirements}</p>
            <button className="intern-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intern;