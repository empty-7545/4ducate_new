import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    institution: "Example University",
    major: "Computer Science",
    year: "Senior",
    linkedIn: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    bio: "Passionate about coding and education.",
  });
  const [courseData] = useState({
    enrolled: 8,
    completed: 5,
    inProgress: 3,
  });

  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  const pieChartInstance = useRef(null);
  const barChartInstance = useRef(null);

  useEffect(() => {
    // Initialize Pie Chart
    if (pieChartRef.current) {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }
      pieChartInstance.current = new Chart(pieChartRef.current, {
        type: "pie",
        data: {
          labels: ["Completed", "In Progress", "Not Started"],
          datasets: [{
            data: [
              courseData.completed,
              courseData.inProgress,
              courseData.enrolled - courseData.completed - courseData.inProgress,
            ],
            backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Course Status Distribution" },
          },
        },
      });
    }

    // Initialize Bar Chart
    if (barChartRef.current) {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }
      barChartInstance.current = new Chart(barChartRef.current, {
        type: "bar",
        data: {
          labels: ["Enrolled", "Completed", "In Progress"],
          datasets: [{
            label: "Courses",
            data: [courseData.enrolled, courseData.completed, courseData.inProgress],
            backgroundColor: ["#007bff", "#28a745", "#ffc107"],
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: true, text: "Course Statistics" },
          },
          scales: {
            y: { beginAtZero: true },
          },
        },
      });
    }

    // Cleanup on unmount
    return () => {
      if (pieChartInstance.current) pieChartInstance.current.destroy();
      if (barChartInstance.current) barChartInstance.current.destroy();
    };
  }, [courseData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Send profileData to backend
  };

  const handleLogout = () => {
    // Clear auth token
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Sample recent activity data
  const recentActivities = [
    { id: 1, action: "Completed 'Python Basics' course", date: "2025-06-20" },
    { id: 2, action: "Started 'Web Development 101'", date: "2025-06-18" },
    { id: 3, action: "Earned 'JavaScript Fundamentals' certificate", date: "2025-06-15" },
  ];

  return (
    <motion.div
      className="min-vh-100 bg-light d-flex flex-column"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Sidebar with Charts */}
          <motion.div
            className={`col-lg-3 bg-white shadow-sm p-4 ${isSidebarOpen ? "d-block" : "d-none d-lg-block"}`}
            variants={sidebarVariants}
            initial="hidden"
            animate={isSidebarOpen || window.innerWidth >= 992 ? "visible" : "hidden"}
            style={{
              height: "100vh",
              position: window.innerWidth >= 992 ? "sticky" : "fixed",
              top: 0,
              overflowY: "auto",
              zIndex: 1050,
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold text-dark">Course Insights</h4>
              <button
                className="btn btn-outline-dark d-lg-none"
                onClick={toggleSidebar}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <motion.div variants={itemVariants} className="mb-4">
              <canvas ref={pieChartRef} height="200"></canvas>
            </motion.div>
            <motion.div variants={itemVariants}>
              <canvas ref={barChartRef} height="200"></canvas>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="col-lg-9 p-4">
            {/* Sidebar Toggle Button for Mobile */}
            <motion.button
              className="btn btn-primary mb-4 d-lg-none"
              onClick={toggleSidebar}
              variants={itemVariants}
            >
              <i className="bi bi-bar-chart-line-fill me-2"></i>
              View Insights
            </motion.button>

            <motion.div
              className="card shadow-lg border-0 rounded-4 p-4 mb-5"
              style={{ background: "linear-gradient(135deg, #ffffff, #f8f9fa)" }}
              variants={containerVariants}
            >
              {/* Profile Header */}
              <motion.div className="d-flex align-items-center mb-4" variants={itemVariants}>
                <div className="position-relative me-4">
                  <motion.img
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                    className="rounded-circle img-fluid"
                    style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #e9ecef" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.div
                    className="position-absolute bottom-0 end-0 bg-dark rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "30px", height: "30px" }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <i className="bi bi-camera-fill text-white fs-6"></i>
                  </motion.div>
                </div>
                <div>
                  <motion.h1 className="h3 fw-bold text-dark" variants={itemVariants}>
                    {profileData.name}
                  </motion.h1>
                  <motion.p className="text-muted mb-0" variants={itemVariants}>
                    {profileData.email}
                  </motion.p>
                </div>
              </motion.div>

              {/* Courses Overview */}
              <motion.div className="row g-3 mb-5" variants={containerVariants}>
                <motion.div className="col-md-6" variants={itemVariants}>
                  <div className="card h-100 border-0 shadow-sm bg-primary text-white rounded-3">
                    <div className="card-body text-center">
                      <i className="bi bi-book-fill fs-3 mb-2"></i>
                      <h5 className="card-title fw-bold">{courseData.enrolled}</h5>
                      <p className="card-text">Courses Enrolled</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div className="col-md-6" variants={itemVariants}>
                  <div className="card h-100 border-0 shadow-sm bg-success text-white rounded-3">
                    <div className="card-body text-center">
                      <i className="bi bi-check-circle-fill fs-3 mb-2"></i>
                      <h5 className="card-title fw-bold">{courseData.completed}</h5>
                      <p className="card-text">Courses Completed</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div className="col-12" variants={itemVariants}>
                  <div className="card border-0 shadow-sm rounded-3">
                    <div className="card-body">
                      <h6 className="fw-bold text-dark">Course Completion Progress</h6>
                      <div className="progress" style={{ height: "20px" }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: `${(courseData.completed / courseData.enrolled) * 100}%` }}
                          aria-valuenow={(courseData.completed / courseData.enrolled) * 100}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {Math.round((courseData.completed / courseData.enrolled) * 100)}%
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div className="card shadow-sm border-0 rounded-3 mb-5" variants={containerVariants}>
                <div className="card-body">
                  <h4 className="fw-bold text-dark mb-4">Recent Activity</h4>
                  <ul className="list-group list-group-flush">
                    {recentActivities.map((activity) => (
                      <motion.li
                        key={activity.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        variants={itemVariants}
                      >
                        <span>{activity.action}</span>
                        <span className="text-muted">{activity.date}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Profile Form */}
              <motion.div className="row g-3" variants={containerVariants}>
                {/* Educational Fields */}
                <motion.div className="col-md-6" variants={itemVariants}>
                  <label className="form-label fw-medium text-dark">Institution</label>
                  <input
                    type="text"
                    name="institution"
                    value={profileData.institution}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`form-control rounded-3 ${isEditing ? "border-primary" : "bg-light border-0"}`}
                  />
                </motion.div>
                <motion.div className="col-md-6" variants={itemVariants}>
                  <label className="form-label fw-medium text-dark">Major</label>
                  <input
                    type="text"
                    name="major"
                    value={profileData.major}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`form-control rounded-3 ${isEditing ? "border-primary" : "bg-light border-0"}`}
                  />
                </motion.div>
                <motion.div className="col-12" variants={itemVariants}>
                  <label className="form-label fw-medium text-dark">Year of Study</label>
                  <select
                    name="year"
                    value={profileData.year}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`form-select rounded-3 ${isEditing ? "border-primary" : "bg-light border-0"}`}
                  >
                    <option>Freshman</option>
                    <option>Sophomore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                    <option>Graduate</option>
                  </select>
                </motion.div>

                {/* Social Profiles */}
                <motion.div className="col-md-6" variants={itemVariants}>
                  <label className="form-label fw-medium text-dark">LinkedIn Profile</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-0">
                      <i className="bi bi-linkedin text-primary"></i>
                    </span>
                    <input
                      type="url"
                      name="linkedIn"
                      value={profileData.linkedIn}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`form-control rounded-end ${isEditing ? "border-primary" : "bg-light border-0"}`}
                    />
                  </div>
                </motion.div>
                <motion.div className="col-md-6" variants={itemVariants}>
                  <label className="form-label fw-medium text-dark">GitHub Profile</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-0">
                      <i className="bi bi-github text-dark"></i>
                    </span>
                    <input
                      type="url"
                      name="github"
                      value={profileData.github}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`form-control rounded-end ${isEditing ? "border-primary" : "bg-light border-0"}`}
                    />
                  </div>
                </motion.div>

                {/* Bio */}
                <motion.div className="col-12" variants={itemVariants}>
                  <label className="form-label fw-medium text-dark">Bio</label>
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    rows="4"
                    className={`form-control rounded-3 ${isEditing ? "border-primary" : "bg-light border-0"}`}
                  ></textarea>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div className="d-flex justify-content-between mt-5" variants={itemVariants}>
                <motion.button
                  onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                  className="btn btn-primary btn-sm btn-lg-sm rounded-pill px-3 px-lg-5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isEditing ? "Save Profile" : "Edit Profile"}
                </motion.button>
                <motion.button
                  onClick={handleLogout}
                  className="btn btn-outline-dark btn-sm btn-lg-sm rounded-pill px-3 px-lg-5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Logout
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <style>
        {`
          @media (min-width: 992px) {
            .btn-lg-sm {
              font-size: 1.25rem !important;
              padding: 0.5rem 1rem !important;
            }
          }
          @media (max-width: 991px) {
            .btn-sm {
              font-size: 0.875rem !important;
              padding: 0.25rem 0.75rem !important;
            }
          }
        `}
      </style>
    </motion.div>
  );
};

export default Profile;