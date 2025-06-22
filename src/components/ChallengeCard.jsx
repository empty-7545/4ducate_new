import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChallengeCard = ({ title, tags, level, image, progress, duration, instructor, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

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
        <div className="position-relative" style={{ height: '220px', overflow: 'hidden' }}>
          <img 
            src={image} 
            className="card-img-top" 
            alt="Challenge preview" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)',
              opacity: isHovered ? 1 : 0.7,
              transition: 'opacity 0.3s ease'
            }}
          ></div>
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
                Challenge Mentor
              </div>
            </div>
          </div>
          <div className="mb-3">
            {tags.map((tag, idx) => (
              <span 
                key={idx} 
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
          <button 
            className="btn mt-auto fw-bold text-uppercase border-0"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white',
              borderRadius: '12px',
              padding: '12px 24px',
              fontSize: '13px',
              letterSpacing: '0.5px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)'
            }}
            onClick={() => navigate('/dashboard/challengesprocess', { state: { challengeIndex: index } })}
          >
            <i className="fas fa-bookmark me-2"></i>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const Challenges = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const challenges = [
    {
      title: "Responsive Card Design",
      tags: ["UI/UX", "React", "CSS"],
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 0,
      duration: "2h 30m",
      instructor: "Sarah Wilson",
    },
    {
      title: "API Integration Challenge",
      tags: ["JavaScript", "REST", "Node.js"],
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 0,
      duration: "4h 15m",
      instructor: "Michael Chen",
    },
    {
      title: "Authentication System",
      tags: ["Security", "React", "Firebase"],
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 0,
      duration: "3h 45m",
      instructor: "David Rodriguez",
    },
    {
      title: "Data Visualization",
      tags: ["D3.js", "React", "Data"],
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      progress: 0,
      duration: "3h 00m",
      instructor: "Emily Watson",
    },
  ];

  const filteredChallenges = challenges.filter(challenge =>
    challenge.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
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
          
          .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
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
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #f8fafc;
          }
        `}
      </style>
      <div className="min-vh-100" style={{ backgroundColor: '#f8fafc' }}>
        <div className="gradient-bg text-white">
          <div className="container-fluid px-4 py-4">
            <div className="row align-items-center animate-in">
              <div className="col-lg-8 col-md-12">
                <h1 className="h3 fw-bold mb-2" style={{ letterSpacing: '-0.02em' }}>
                  Challenges Dashboard
                </h1>
                <p className="mb-0 opacity-90" style={{ fontSize: '16px' }}>
                  Test your skills with practical coding challenges
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-4 py-4">
          <div className="row mb-4 animate-in">
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
                          placeholder="Search challenges..."
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
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="fw-bold text-dark mb-2" style={{ fontSize: '24px' }}>
                    All Challenges
                  </h2>
                  <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                    Explore all available coding challenges
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
                  {filteredChallenges.length} challenge{filteredChallenges.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            {filteredChallenges.length > 0 ? (
              filteredChallenges.map((challenge, index) => (
                <ChallengeCard key={index} {...challenge} index={index} />
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
                    <h4 className="text-muted fw-bold mb-3">No Challenges Found</h4>
                    <p className="text-muted mb-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
                      We couldn't find any challenges matching your search criteria. 
                      Try adjusting your search terms.
                    </p>
                    <button 
                      className="btn btn-primary px-4 py-3 fw-semibold"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '12px',
                        border: 'none'
                      }}
                      onClick={() => setSearchQuery('')}
                    >
                      <i className="fas fa-refresh me-2"></i>
                      View All Challenges
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

export default Challenges;