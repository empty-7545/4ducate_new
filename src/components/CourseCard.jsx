import React, { useState, useEffect } from 'react';

const CourseCard = ({ title, tags, rating, level, image, progress, duration, instructor, enrolled, lastAccessed }) => {
  const [isHovered, setIsHovered] = useState(false);

  const levelColors = {
    'Beginner': { bg: '#dcfce7', text: '#166534', border: '#bbf7d0' },
    'Intermediate': { bg: '#fef3c7', text: '#92400e', border: '#fde68a' },
    'Advanced': { bg: '#fee2e2', text: '#991b1b', border: '#fecaca' }
  };

  const progressColor = progress >= 80 ? '#10b981' : progress >= 50 ? '#f59e0b' : '#3b82f6';

  return (
    <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
      <div 
        className="card h-100 border-0 position-relative overflow-hidden"
        style={{ 
          borderRadius: '16px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.5)' 
            : '0 4px 20px rgba(0,0,0,0.08)',
          background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Course Image with Overlay */}
        <div className="position-relative" style={{ height: '220px', overflow: 'hidden' }}>
          <img 
            src={image} 
            className="card-img-top" 
            alt="Course preview" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          
          {/* Gradient Overlay */}
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)',
              opacity: isHovered ? 1 : 0.7,
              transition: 'opacity 0.3s ease'
            }}
          ></div>

          {/* Level Badge */}
          <span 
            className="badge position-absolute top-0 end-0 m-3 px-3 py-2"
            style={{
              backgroundColor: levelColors[level].bg,
              color: levelColors[level].text,
              border: `1px solid ${levelColors[level].border}`,
              fontSize: '12px',
              fontWeight: '600',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)'
            }}
          >
            {level}
          </span>

          {/* Progress Indicator */}
          {enrolled && (
            <div className="position-absolute bottom-0 start-0 w-100 p-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-white fw-semibold" style={{ fontSize: '13px' }}>
                  Progress: {progress}%
                </span>
                <span className="text-white opacity-75" style={{ fontSize: '12px' }}>
                  {duration}
                </span>
              </div>
              <div 
                className="progress" 
                style={{ 
                  height: '6px', 
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255,255,255,0.3)'
                }}
              >
                <div 
                  className="progress-bar" 
                  style={{ 
                    width: `${progress}%`,
                    backgroundColor: progressColor,
                    borderRadius: '10px',
                    transition: 'width 0.5s ease'
                  }}
                ></div>
              </div>
            </div>
          )}

          {/* Play Button Overlay */}
          <div 
            className="position-absolute top-50 start-50 translate-middle"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div 
              className="d-flex align-items-center justify-content-center text-white"
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            >
              <i className="fas fa-play" style={{ fontSize: '20px', marginLeft: '3px' }}></i>
            </div>
          </div>
        </div>
        
        <div className="card-body d-flex flex-column p-4">
          {/* Course Title */}
          <h5 
            className="card-title mb-3" 
            style={{ 
              color: '#1e293b', 
              fontWeight: '700', 
              fontSize: '18px',
              lineHeight: '1.4',
              letterSpacing: '-0.02em'
            }}
          >
            {title}
          </h5>

          {/* Instructor Info */}
          <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3"
              style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                fontSize: '12px'
              }}
            >
              {instructor.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-grow-1">
              <div className="fw-semibold text-dark" style={{ fontSize: '14px' }}>
                {instructor}
              </div>
              <div className="text-muted" style={{ fontSize: '12px' }}>
                Lead Instructor
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="badge me-2 mb-1"
                style={{
                  background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)',
                  color: '#0277bd',
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  border: '1px solid #81d4fa'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Rating and Last Accessed */}
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex align-items-center">
              <div className="me-2">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      color: i < Math.floor(rating) ? '#fbbf24' : '#e5e7eb',
                      fontSize: '14px'
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span 
                className="text-muted fw-semibold"
                style={{ fontSize: '14px' }}
              >
                {rating}
              </span>
            </div>
            {enrolled && lastAccessed && (
              <div className="text-muted" style={{ fontSize: '12px' }}>
                Last: {lastAccessed}
              </div>
            )}
          </div>
          
          {/* Action Button */}
          <button 
            className="btn mt-auto fw-bold text-uppercase border-0"
            style={{
              background: enrolled 
                ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white',
              borderRadius: '12px',
              padding: '12px 24px',
              fontSize: '13px',
              letterSpacing: '0.5px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: enrolled
                ? '0 4px 14px rgba(16, 185, 129, 0.4)'
                : '0 4px 14px rgba(59, 130, 246, 0.4)'
            }}
          >
            {enrolled ? (
              <>
                <i className="fas fa-play-circle me-2"></i>
                Continue Learning
              </>
            ) : (
              <>
                <i className="fas fa-bookmark me-2"></i>
                Start Course
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const UserProfile = ({ user }) => (
  <div className="d-flex align-items-center">
    <div 
      className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3"
      style={{
        width: '45px',
        height: '45px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontSize: '16px'
      }}
    >
      {user.name.split(' ').map(n => n[0]).join('')}
    </div>
    <div>
      <div className="fw-bold text-dark" style={{ fontSize: '16px' }}>
        {user.name}
      </div>
      <div className="text-muted" style={{ fontSize: '13px' }}>
        {user.role} • {user.coursesCompleted} courses completed
      </div>
    </div>
  </div>
);

const StatCard = ({ icon, value, label, color, change }) => (
  <div className="col-lg-3 col-md-6 mb-4">
    <div 
      className="card border-0 h-100"
      style={{
        borderRadius: '16px',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}
    >
      <div className="card-body p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: '50px',
              height: '50px',
              background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
              color: color
            }}
          >
            <i className={`${icon} fa-lg`}></i>
          </div>
          {change && (
            <span 
              className="badge px-2 py-1"
              style={{
                backgroundColor: change > 0 ? '#dcfce7' : '#fee2e2',
                color: change > 0 ? '#166534' : '#991b1b',
                fontSize: '11px',
                borderRadius: '12px'
              }}
            >
              {change > 0 ? '+' : ''}{change}%
            </span>
          )}
        </div>
        <h3 className="fw-bold mb-1" style={{ color: '#1e293b', fontSize: '24px' }}>
          {value}
        </h3>
        <p className="text-muted mb-0" style={{ fontSize: '14px', fontWeight: '500' }}>
          {label}
        </p>
      </div>
    </div>
  </div>
);

const CourseDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const user = {
    name: 'Alex Johnson',
    role: 'Senior Developer',
    coursesCompleted: 12
  };

  const stats = [
    { icon: 'fas fa-graduation-cap', value: '8', label: 'Courses Enrolled', color: '#3b82f6', change: 15 },
    { icon: 'fas fa-clock', value: '45h', label: 'Hours Learned', color: '#10b981', change: 23 },
    { icon: 'fas fa-certificate', value: '5', label: 'Certificates Earned', color: '#f59e0b', change: 12 },
    { icon: 'fas fa-trophy', value: '92%', label: 'Average Score', color: '#ef4444', change: 8 }
  ];

  const courses = [
    {
      title: "Advanced E-commerce Architecture",
      tags: ["UI/UX", "React", "Node.js"],
      rating: 4.8,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 75,
      duration: "8h 30m",
      instructor: "Sarah Wilson",
      enrolled: true,
      lastAccessed: "2 hours ago"
    },
    {
      title: "React Native for Enterprise",
      tags: ["React Native", "Mobile", "TypeScript"],
      rating: 4.9,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 45,
      duration: "12h 15m",
      instructor: "Michael Chen",
      enrolled: true,
      lastAccessed: "1 day ago"
    },
    {
      title: "Full-Stack Development Mastery",
      tags: ["JavaScript", "Python", "AWS"],
      rating: 4.7,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 90,
      duration: "16h 45m",
      instructor: "David Rodriguez",
      enrolled: true,
      lastAccessed: "3 hours ago"
    },
    {
      title: "Machine Learning Pipeline",
      tags: ["Python", "TensorFlow", "MLOps"],
      rating: 4.6,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 0,
      duration: "20h 30m",
      instructor: "Emily Watson",
      enrolled: false,
      lastAccessed: null
    },
    {
      title: "DevOps & Cloud Security",
      tags: ["AWS", "Docker", "Kubernetes"],
      rating: 4.5,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 0,
      duration: "14h 20m",
      instructor: "James Wilson",
      enrolled: false,
      lastAccessed: null
    },
    {
      title: "Design Systems at Scale",
      tags: ["Design", "Figma", "Storybook"],
      rating: 4.4,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 60,
      duration: "10h 15m",
      instructor: "Anna Thompson",
      enrolled: true,
      lastAccessed: "5 hours ago"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || 
                         (activeFilter === 'enrolled' && course.enrolled) ||
                         (activeFilter === 'completed' && course.progress === 100) ||
                         (activeFilter === 'recommended' && !course.enrolled);
    return matchesSearch && matchesFilter;
  });

  const filters = [
    { key: 'all', label: 'All Courses', icon: 'fas fa-th-large', count: courses.length },
    { key: 'enrolled', label: 'My Courses', icon: 'fas fa-bookmark', count: courses.filter(c => c.enrolled).length },
    { key: 'completed', label: 'Completed', icon: 'fas fa-check-circle', count: courses.filter(c => c.progress === 100).length },
    { key: 'recommended', label: 'Recommended', icon: 'fas fa-star', count: courses.filter(c => !c.enrolled).length }
  ];

  return (
    <>
      {/* External CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        rel="stylesheet" 
      />
      
      <style>
        {`
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
          }
          
          .fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          
          .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: relative;
            overflow: hidden;
          }
          
          .gradient-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            opacity: 0.6;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #f8fafc;
          }
        `}
      </style>
      
      <div className="min-vh-100" style={{ backgroundColor: '#f8fafc' }}>
        {/* Header Section */}
        <div className="gradient-bg text-white">
          <div className="container-fluid px-4 py-4">
            <div className={`row align-items-center ${isLoaded ? 'fade-in' : ''}`}>
              <div className="col-lg-8 col-md-12">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h1 className="h3 fw-bold mb-2" style={{ letterSpacing: '-0.02em' }}>
                      Learning Dashboard
                    </h1>
                    <p className="mb-0 opacity-90" style={{ fontSize: '16px' }}>
                      Continue your professional development journey
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-3 mt-lg-0">
                <div className="d-flex justify-content-lg-end">
                  <UserProfile user={user} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container-fluid px-4 py-4">
          <div className={`row ${isLoaded ? 'animate-in' : ''}`}>
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container-fluid px-4 pb-5">
          {/* Filters and Search */}
          <div className={`row mb-4 ${isLoaded ? 'animate-in' : ''}`}>
            <div className="col-12">
              <div 
                className="card border-0 shadow-sm"
                style={{
                  borderRadius: '16px',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
                }}
              >
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12 mb-3 mb-lg-0">
                      <div className="d-flex flex-wrap gap-2">
                        {filters.map(filter => (
                          <button 
                            key={filter.key}
                            className={`btn ${activeFilter === filter.key ? 'btn-primary' : 'btn-outline-primary'} d-flex align-items-center`}
                            style={{
                              borderRadius: '12px',
                              fontWeight: '600',
                              fontSize: '14px',
                              padding: '10px 20px',
                              background: activeFilter === filter.key 
                                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                : 'transparent',
                              border: activeFilter === filter.key ? 'none' : '2px solid #e2e8f0',
                              transition: 'all 0.3s ease'
                            }}
                            onClick={() => setActiveFilter(filter.key)}
                          >
                            <i className={`${filter.icon} me-2`}></i>
                            {filter.label}
                            <span 
                              className="badge ms-2"
                              style={{
                                backgroundColor: activeFilter === filter.key ? 'rgba(255,255,255,0.2)' : '#e2e8f0',
                                color: activeFilter === filter.key ? 'white' : '#64748b',
                                fontSize: '11px'
                              }}
                            >
                              {filter.count}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="input-group">
                        <span 
                          className="input-group-text bg-white border-end-0"
                          style={{ borderRadius: '12px 0 0 12px', border: '2px solid #e2e8f0' }}
                        >
                          <i className="fas fa-search text-muted"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control border-start-0 ps-0"
                          placeholder="Search your courses..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          style={{
                            borderRadius: '0 12px 12px 0',
                            border: '2px solid #e2e8f0',
                            fontSize: '14px'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Section Header */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="fw-bold text-dark mb-2" style={{ fontSize: '24px' }}>
                    {activeFilter === 'all' && 'All Available Courses'}
                    {activeFilter === 'enrolled' && 'My Learning Path'}
                    {activeFilter === 'completed' && 'Completed Courses'}
                    {activeFilter === 'recommended' && 'Recommended for You'}
                  </h2>
                  <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                    {activeFilter === 'enrolled' && 'Continue where you left off'}
                    {activeFilter === 'recommended' && 'Courses tailored to your learning goals'}
                    {activeFilter === 'completed' && 'Your achievements and certifications'}
                    {activeFilter === 'all' && 'Explore our complete course catalog'}
                  </p>
                </div>
                <span 
                  className="badge px-3 py-2"
                  style={{
                    background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)',
                    color: '#0277bd',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}
                >
                  {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="row">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))
            ) : (
              <div className="col-12">
                <div 
                  className="card border-0 shadow-sm text-center py-5"
                  style={{
                    borderRadius: '20px',
                    background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
                  }}
                >
                  <div className="card-body">
                    <i className="fas fa-search fa-4x text-muted opacity-50 mb-4"></i>
                    <h4 className="text-muted fw-bold mb-3">No Courses Found</h4>
                    <p className="text-muted mb-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
                      We couldn't find any courses matching your criteria. 
                      Try adjusting your search or browse all available courses.
                    </p>
                    <button 
                      className="btn btn-primary px-4 py-3 fw-semibold"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '12px',
                        border: 'none'
                      }}
                      onClick={() => {
                        setSearchQuery('');
                        setActiveFilter('all');
                      }}
                    >
                      <i className="fas fa-refresh me-2"></i>
                      View All Courses
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDashboard;