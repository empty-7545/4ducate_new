import React, { useEffect, useState } from 'react';

const CourseCard = ({ title, weeks, featured, description, instructor, rating, students }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className={`card h-100 shadow-sm border-0 ${featured ? 'border-primary' : ''}`}>
        {featured && (
          <div className="position-absolute" style={{ top: '12px', right: '12px', zIndex: 1 }}>
            <span className="badge bg-primary">Featured</span>
          </div>
        )}
        <div className="card-img-top bg-light d-flex align-items-center justify-content-center" 
             style={{ height: '200px', backgroundColor: '#f8f9fa' }}>
          <div className="text-center text-muted">
            <i className="fas fa-graduation-cap fa-3x mb-2"></i>
            <div className="small">Course Thumbnail</div>
          </div>
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-dark fw-bold">{title}</h5>
          <p className="card-text text-muted small mb-2">{description}</p>
          <div className="mb-2">
            <small className="text-muted">
              <i className="fas fa-user-tie me-1"></i>
              {instructor}
            </small>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <div className="text-warning me-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fas fa-star ${i < rating ? '' : 'text-muted'}`}></i>
                ))}
              </div>
              <small className="text-muted">({rating}.0)</small>
            </div>
            <small className="text-muted">
              <i className="fas fa-users me-1"></i>
              {students} students
            </small>
          </div>
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="badge bg-light text-dark">
                <i className="fas fa-clock me-1"></i>
                {weeks} weeks
              </span>
              <span className="text-primary fw-bold">$99</span>
            </div>
            <button className="btn btn-primary w-100 fw-semibold">
              <i className="fas fa-shopping-cart me-2"></i>
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseApp = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    { 
      id: 1, 
      title: 'UI & UX Design Professional', 
      weeks: 12, 
      category: 'design', 
      featured: true,
      description: 'Master the fundamentals of user interface and user experience design.',
      instructor: 'Sarah Johnson',
      rating: 5,
      students: 1248
    },
    { 
      id: 2, 
      title: 'Frontend Development Masterclass', 
      weeks: 10, 
      category: 'development', 
      featured: false,
      description: 'Complete guide to modern frontend development with React and Vue.',
      instructor: 'Michael Chen',
      rating: 4,
      students: 892
    },
    { 
      id: 3, 
      title: 'React & NextJS Complete Course', 
      weeks: 8, 
      category: 'development', 
      featured: true,
      description: 'Build production-ready applications with React and Next.js.',
      instructor: 'David Rodriguez',
      rating: 5,
      students: 2156
    },
    { 
      id: 4, 
      title: 'Mobile App Design Fundamentals', 
      weeks: 6, 
      category: 'design', 
      featured: false,
      description: 'Learn to design beautiful and functional mobile applications.',
      instructor: 'Emily Watson',
      rating: 4,
      students: 567
    },
    { 
      id: 5, 
      title: 'Full Stack Developer Bootcamp', 
      weeks: 16, 
      category: 'development', 
      featured: true,
      description: 'Comprehensive bootcamp covering frontend, backend, and databases.',
      instructor: 'James Wilson',
      rating: 5,
      students: 3421
    },
    { 
      id: 6, 
      title: 'UX Research & Prototyping', 
      weeks: 8, 
      category: 'design', 
      featured: false,
      description: 'Advanced UX research methods and rapid prototyping techniques.',
      instructor: 'Anna Thompson',
      rating: 4,
      students: 734
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || 
                       (activeTab === 'trending' && course.featured) ||
                       (activeTab === 'newest' && course.id > courses.length - 3);
    return matchesSearch && matchesTab;
  });

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        rel="stylesheet" 
      />
      
      <div className="bg-light min-vh-100">
        {/* Header Section */}
        <div className="bg-white border-bottom">
          <div className="container py-5">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="display-4 fw-bold text-primary mb-2">
                  <i className="fas fa-graduation-cap me-3"></i>
                  Professional Courses
                </h1>
                <p className="lead text-muted mb-4">
                  Advance your career with industry-leading courses designed by experts
                </p>
                <div className="d-flex justify-content-center">
                  <div className="bg-primary" style={{ height: '3px', width: '80px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-primary text-white py-4">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-3 col-6 mb-3 mb-md-0">
                <h3 className="fw-bold mb-1">10,000+</h3>
                <small>Students Enrolled</small>
              </div>
              <div className="col-md-3 col-6 mb-3 mb-md-0">
                <h3 className="fw-bold mb-1">50+</h3>
                <small>Expert Instructors</small>
              </div>
              <div className="col-md-3 col-6 mb-3 mb-md-0">
                <h3 className="fw-bold mb-1">100+</h3>
                <small>Courses Available</small>
              </div>
              <div className="col-md-3 col-6">
                <h3 className="fw-bold mb-1">95%</h3>
                <small>Success Rate</small>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-5">
          {/* Filters Section */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mb-3 mb-lg-0">
                      <div className="btn-group" role="group">
                        <button 
                          type="button" 
                          className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => setActiveTab('all')}
                        >
                          <i className="fas fa-th-list me-2"></i>All Courses
                        </button>
                        <button 
                          type="button" 
                          className={`btn ${activeTab === 'newest' ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => setActiveTab('newest')}
                        >
                          <i className="fas fa-clock me-2"></i>Newest
                        </button>
                        <button 
                          type="button" 
                          className={`btn ${activeTab === 'trending' ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => setActiveTab('trending')}
                        >
                          <i className="fas fa-fire me-2"></i>Trending
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <i className="fas fa-search text-muted"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control border-start-0 ps-0"
                          placeholder="Search courses..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold text-dark mb-0">
                  {activeTab === 'all' && 'All Courses'}
                  {activeTab === 'newest' && 'Newest Courses'}
                  {activeTab === 'trending' && 'Trending Courses'}
                </h3>
                <span className="badge bg-light text-dark">
                  {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <CourseCard 
                  key={course.id}
                  title={course.title}
                  weeks={course.weeks}
                  featured={course.featured}
                  description={course.description}
                  instructor={course.instructor}
                  rating={course.rating}
                  students={course.students}
                />
              ))
            ) : (
              <div className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body text-center py-5">
                    <i className="fas fa-search fa-3x text-muted mb-3"></i>
                    <h4 className="text-muted">No courses found</h4>
                    <p className="text-muted mb-4">
                      Try adjusting your search criteria or browse all courses
                    </p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveTab('all');
                      }}
                    >
                      <i className="fas fa-refresh me-2"></i>
                      Reset Filters
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer CTA Section */}
        <div className="bg-dark text-white py-5 mt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12 mb-3 mb-lg-0">
                <h3 className="fw-bold mb-2">Ready to advance your career?</h3>
                <p className="mb-0 text-light">
                  Join thousands of professionals who have transformed their careers with our courses.
                </p>
              </div>
              <div className="col-lg-4 col-md-12 text-lg-end">
                <button className="btn btn-primary btn-lg">
                  <i className="fas fa-rocket me-2"></i>
                  Start Learning Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseApp;