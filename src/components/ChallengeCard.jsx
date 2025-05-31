import React from 'react';
import '../css/Challenges.css';

const ChallengeCard = ({ icon, title, description, status }) => {
  const getStatusClass = () => {
    switch (status.toLowerCase()) {
      case 'done':
        return 'status-done';
      case 'in progress':
        return 'status-progress';
      case 'start':
        return 'status-start';
      default:
        return '';
    }
  };

  return (
    <div className="challenge-card">
      <div className="challenge-icon">
        {icon}
      </div>
      <div className="challenge-info">
        <h3 className="challenge-title">{title}</h3>
        <p className="challenge-description">{description}</p>
      </div>
      <div className="challenge-actions">
        <div className={`challenge-status ${getStatusClass()}`}>
          {status}
        </div>
        <button className="challenge-btn">Start</button>
      </div>
    </div>
  );
};

const Challenges = () => {
  const challenges = [
    {
      icon: <div className="icon-circle"></div>,
      title: "Develop the Cards first",
      description: "Implement a responsive card component that works on all screen sizes...",
      status: "Done"
    },
    {
      icon: <div className="icon-circle"></div>,
      title: "Develop the Cards first",
      description: "Implement a responsive card component that works on all screen sizes...",
      status: "In Progress"
    },
    {
      icon: <div className="icon-circle"></div>,
      title: "Develop the Cards first",
      description: "Implement a responsive card component that works on all screen sizes...",
      status: "Start"
    },
    {
      icon: <div className="icon-circle"></div>,
      title: "Develop the Cards first",
      description: "Implement a responsive card component that works on all screen sizes...",
      status: "Done"
    }
  ];

  return (
    <div className="challenges-container">
      <div className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div className="challenges-list">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>
    </div>
  );
};

export default Challenges;