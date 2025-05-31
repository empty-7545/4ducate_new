import React from 'react';
import '../css/CoursesGrid.css';

const CourseCard = ({ title, tags, rating, level }) => {
  return (
    <div className="course-card">
      <div className="course-image-container">
        <div className="course-level">{level}</div>
      </div>
      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        <div className="course-tags">
          {tags.map((tag, index) => (
            <span key={index} className="course-tag">{tag}</span>
          ))}
        </div>
        <div className="course-rating">
          <div className="star-rating">
            <span className="star filled">★</span>
            <span className="star filled">★</span>
            <span className="star filled">★</span>
            <span className="star filled">★</span>
            <span className="star">★</span>
          </div>
          <span className="rating-value">{rating}</span>
        </div>
        <button className="course-btn">View Course</button>
      </div>
    </div>
  );
};

const CoursesGrid = () => {
  const courses = [
    {
      title: "E-commerce App Design",
      tags: ["UI", "UX"],
      rating: 4.5,
      level: "Beginner"
    },
    {
      title: "E-commerce App Design",
      tags: ["UI", "UX"],
      rating: 4.5,
      level: "Beginner"
    },
    {
      title: "E-commerce App Design",
      tags: ["UI", "UX"],
      rating: 4.5,
      level: "Beginner"
    },
    {
      title: "E-commerce App Design",
      tags: ["UI", "UX"],
      rating: 4.5,
      level: "Beginner"
    },
    {
      title: "E-commerce App Design",
      tags: ["UI", "UX"],
      rating: 4.5,
      level: "Beginner"
    },
    {
      title: "E-commerce App Design",
      tags: ["UI", "UX"],
      rating: 4.5,
      level: "Beginner"
    }
  ];

  return (
    <div className="courses-container">
      <div className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesGrid;