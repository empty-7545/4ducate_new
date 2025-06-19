import React from 'react';

const CourseCard = ({ title, tags, rating, level, image }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div 
        className="card h-100 shadow-sm border-0" 
        style={{ 
          borderRadius: '12px', 
          overflow: 'hidden', 
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }}
      >
        <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
          <img 
            src={image} 
            className="card-img-top" 
            alt="Course preview" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <span 
            className="badge position-absolute top-0 end-0 m-2"
            style={{
              backgroundColor: level === 'Beginner' ? '#10b981' : level === 'Intermediate' ? '#f59e0b' : '#ef4444',
              fontSize: '0.75rem',
              padding: '0.4rem 0.8rem',
              borderRadius: '20px'
            }}
          >
            {level}
          </span>
        </div>
        
        <div className="card-body d-flex flex-column" style={{ padding: '1.5rem' }}>
          <h5 
            className="card-title mb-3" 
            style={{ 
              color: '#1e40af', 
              fontWeight: '600', 
              fontSize: '1.1rem',
              lineHeight: '1.3'
            }}
          >
            {title}
          </h5>
          
          <div className="mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="badge me-2 mb-1"
                style={{
                  backgroundColor: '#e0f2fe',
                  color: '#0277bd',
                  fontSize: '0.7rem',
                  fontWeight: '500',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '12px'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="d-flex align-items-center mb-3">
            <div className="me-2">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  style={{ 
                    color: i < Math.floor(rating) ? '#fbbf24' : '#e5e7eb',
                    fontSize: '0.9rem'
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <span 
              className="text-muted"
              style={{ fontSize: '0.875rem', fontWeight: '500' }}
            >
              {rating}
            </span>
          </div>
          
          <button 
            className="btn btn-primary mt-auto fw-bold text-uppercase"
            style={{
              background: 'linear-gradient(45deg, #3b82f6, #60a5fa)',
              border: 'none',
              borderRadius: '8px',
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.3)';
            }}
          >
            View Course
          </button>
        </div>
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
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "React Native Development",
      tags: ["React", "Mobile"],
      rating: 4.8,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Web Development Masterclass",
      tags: ["HTML", "CSS", "JS"],
      rating: 4.7,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Data Science with Python",
      tags: ["Python", "AI"],
      rating: 4.6,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Digital Marketing Strategy",
      tags: ["Marketing", "SEO"],
      rating: 4.4,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Graphic Design Fundamentals",
      tags: ["Design", "Adobe"],
      rating: 4.3,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css" 
        rel="stylesheet" 
      />
      
      <div 
        className="container-fluid py-5"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          minHeight: '100vh'
        }}
      >
        <div className="container">
          {/* Header Section */}
          <div className="row mb-5">
            <div className="col-lg-6 col-md-12 mb-3 mb-lg-0">
              <h2 
                className="display-5 fw-bold mb-0"
                style={{ 
                  color: '#1e40af',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                Courses
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="input-group" style={{ maxWidth: '400px', marginLeft: 'auto' }}>
                <input 
                  type="text" 
                  className="form-control border-0 shadow-sm"
                  placeholder="Search courses..."
                  style={{
                    borderRadius: '10px 0 0 10px',
                    padding: '12px 16px',
                    backgroundColor: '#ffffff',
                    fontSize: '15px'
                  }}
                />
                <button 
                  className="btn text-white"
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #60a5fa)',
                    border: 'none',
                    borderRadius: '0 10px 10px 0',
                    padding: '12px 16px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="row">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesGrid;