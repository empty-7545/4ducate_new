import React from 'react';
import '../css/CommunityGrid.css';

const CommunityCard = ({ image, price }) => {
  return (
    <div className="community-card">
      <div className="community-image">
        <img src={image} alt="Community content" />
      </div>
      <div className="community-content">
        <div className="community-price">{price}</div>
        <button className="community-btn">GET COMMUNITY</button>
      </div>
    </div>
  );
};

const CommunityGrid = () => {
  // Using placeholder images
  const communities = [
    { image: "/api/placeholder/400/320", price: "$15.99" },
    { image: "/api/placeholder/400/320", price: "$15.99" },
    { image: "/api/placeholder/400/320", price: "$15.99" },
    { image: "/api/placeholder/400/320", price: "$15.99" },
    { image: "/api/placeholder/400/320", price: "$15.99" },
    { image: "/api/placeholder/400/320", price: "$15.99" }
  ];

  return (
    <div className="community-container">
      <div className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div className="community-grid">
        {communities.map((community, index) => (
          <CommunityCard key={index} {...community} />
        ))}
      </div>
    </div>
  );
};

export default CommunityGrid;