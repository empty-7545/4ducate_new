import React from 'react';

const CommunityCard = ({ image, price }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '12px', overflow: 'hidden', transition: 'all 0.3s ease' }}>
        <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
          <img 
            src={image} 
            className="card-img-top" 
            alt="Community content" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>
        <div className="card-body text-center d-flex flex-column justify-content-center" style={{ padding: '1.5rem' }}>
          <h5 className="card-title mb-3" style={{ color: '#2563eb', fontWeight: '600', fontSize: '1.25rem' }}>
            {price}
          </h5>
          <button 
            className="btn btn-primary fw-bold text-uppercase"
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
            Get Community
          </button>
        </div>
      </div>
    </div>
  );
};

const CommunityGrid = () => {
  const communities = [
    { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", price: "$15.99" },
    { image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", price: "$15.99" },
    { image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", price: "$15.99" },
    { image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", price: "$15.99" },
    { image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", price: "$15.99" },
    { image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", price: "$15.99" }
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
                Communities
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="input-group" style={{ maxWidth: '400px', marginLeft: 'auto' }}>
                <input 
                  type="text" 
                  className="form-control border-0 shadow-sm"
                  placeholder="Search communities..."
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

          {/* Community Grid */}
          <div className="row">
            {communities.map((community, index) => (
              <CommunityCard key={index} {...community} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityGrid;