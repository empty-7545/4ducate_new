import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Intern = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [searchTerm, setSearchTerm] = useState('');
  
  const tabs = [
    { id: 'frontend', label: 'Front-End Developer' },
    { id: 'backend', label: 'Back-End Developer' }
  ];
  
  const internPositions = {
    frontend: [
      { 
        title: "Frontend React Developer", 
        requirements: "Experience with React, HTML5, CSS3, JavaScript ES6+",
        location: "Remote",
        type: "Full-time Internship"
      },
      { 
        title: "UI/UX Developer Intern", 
        requirements: "Knowledge of React, Bootstrap, Figma, responsive design",
        location: "Hybrid",
        type: "Part-time Internship"
      },
      { 
        title: "JavaScript Developer", 
        requirements: "Proficiency in React, TypeScript, Git, REST APIs",
        location: "On-site",
        type: "Full-time Internship"
      },
      { 
        title: "Web Development Intern", 
        requirements: "HTML, CSS, JavaScript, React, basic Node.js knowledge",
        location: "Remote",
        type: "Part-time Internship"
      }
    ],
    backend: [
      { 
        title: "Backend Node.js Developer", 
        requirements: "Experience with Node.js, Express, MongoDB, REST APIs",
        location: "Remote",
        type: "Full-time Internship"
      },
      { 
        title: "Python Developer Intern", 
        requirements: "Knowledge of Python, Django/Flask, PostgreSQL, Git",
        location: "Hybrid",
        type: "Full-time Internship"
      },
      { 
        title: "Database Developer", 
        requirements: "SQL, MySQL/PostgreSQL, data modeling, basic backend knowledge",
        location: "On-site",
        type: "Part-time Internship"
      },
      { 
        title: "API Developer Intern", 
        requirements: "REST APIs, Node.js, Express, authentication, testing",
        location: "Remote",
        type: "Full-time Internship"
      }
    ]
  };

  const getCurrentPositions = () => {
    const positions = internPositions[activeTab] || [];
    if (!searchTerm) return positions;
    
    return positions.filter(position => 
      position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.requirements.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="container">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card shadow-sm border-0 rounded-3">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h2 className="text-primary fw-bold mb-2">
                      <i className="bi bi-briefcase me-2"></i>
                      Internship Opportunities
                    </h2>
                    <p className="text-muted mb-0">Find your perfect internship match</p>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-search text-muted"></i>
                      </span>
                      <input 
                        type="text" 
                        className="form-control border-start-0 ps-0" 
                        placeholder="Search internships..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="row mb-4">
          <div className="col-12">
            <ul className="nav nav-pills nav-fill gap-2">
              {tabs.map(tab => (
                <li key={tab.id} className="nav-item">
                  <button 
                    className={`nav-link rounded-pill px-4 py-2 fw-semibold ${
                      activeTab === tab.id 
                        ? 'active bg-primary text-white' 
                        : 'bg-white text-primary border border-primary'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <i className={`bi ${tab.id === 'frontend' ? 'bi-code-slash' : 'bi-server'} me-2`}></i>
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Internship Cards */}
        <div className="row">
          {getCurrentPositions().length > 0 ? (
            getCurrentPositions().map((position, index) => (
              <div key={index} className="col-lg-6 col-xl-4 mb-4">
                <div className="card h-100 shadow-sm border-0 rounded-3 hover-card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className={`badge rounded-pill ${
                        position.type.includes('Full-time') 
                          ? 'bg-success bg-opacity-10 text-success' 
                          : 'bg-warning bg-opacity-10 text-warning'
                      }`}>
                        {position.type}
                      </span>
                      <small className="text-muted">
                        <i className="bi bi-geo-alt me-1"></i>
                        {position.location}
                      </small>
                    </div>
                    
                    <h5 className="card-title text-dark fw-bold mb-3">
                      {position.title}
                    </h5>
                    
                    <p className="card-text text-muted small mb-4">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      {position.requirements}
                    </p>
                    
                    <div className="d-grid">
                      <button className="btn btn-primary rounded-pill py-2 fw-semibold">
                        <i className="bi bi-arrow-right-circle me-2"></i>
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="card shadow-sm border-0 rounded-3">
                <div className="card-body text-center py-5">
                  <i className="bi bi-search display-1 text-muted mb-3"></i>
                  <h4 className="text-muted">No internships found</h4>
                  <p className="text-muted">Try adjusting your search terms</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card shadow-sm border-0 rounded-3 bg-primary bg-opacity-5">
              <div className="card-body p-4">
                <div className="row text-center">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <h3 className="text-primary fw-bold mb-1">50+</h3>
                    <p className="text-muted mb-0">Active Positions</p>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <h3 className="text-success fw-bold mb-1">95%</h3>
                    <p className="text-muted mb-0">Success Rate</p>
                  </div>
                  <div className="col-md-4">
                    <h3 className="text-warning fw-bold mb-1">24/7</h3>
                    <p className="text-muted mb-0">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-card {
          transition: all 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }
        .nav-link {
          transition: all 0.3s ease;
        }
        .nav-link:not(.active):hover {
          background-color: #e3f2fd !important;
          transform: translateY(-2px);
        }
        .btn-primary {
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
        }
        .input-group-text {
          background-color: #f8f9fa !important;
        }
        .form-control:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.15);
        }
      `}</style>
    </div>
  );
};

export default Intern;