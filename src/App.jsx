import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import VerifyCertificate from "./components/Verificationcertficate";
import Login from "./components/Login";
import Register from "./components/SignUp";
import Reachus from "./components/Reachus";
import Maincourse from "./components/Maincourse";
import Whoweare from "./pages/Whoweare";
import ProfileNav from './pages/ProfileNav';
import ProfileHome from './pages/ProfileHome';
import BottomNavbar from './pages/BottomNavbar';
import Intern from "./components/Intern ";
import Challenges from "./components/ChallengeCard";
import CommunityGrid from "./components/CommunityCard";
import CourseCard from "./components/CourseCard";
import './App.css';
import Profile from "./components/Profile";
import ChallengesProcess from "./components/ChallengesProcess";

const NavbarWrapper = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showNavbar = !location.pathname.startsWith("/dashboard") || !isMobile;
  
  return showNavbar ? <Navbar /> : null;
};

const FooterWrapper = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Show footer on all pages except dashboard on mobile
  const showFooter = !(location.pathname.startsWith("/dashboard") && isMobile);
  
  return showFooter ? <Footer /> : null;
};

const BottomNavbarWrapper = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Show bottom navbar only on dashboard routes and only on mobile
  const showBottomNav = location.pathname.startsWith("/dashboard") && isMobile;
  
  return showBottomNav ? <BottomNavbar /> : null;
};

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const Dashboard = () => (
    <div className="app-container">
      <div className="main-content">
        <ProfileNav isMobile={isMobile} />
        <ProfileHome />
      </div>
    </div>
  );

  return (
    <Router>
      <NavbarWrapper />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Maincourse />} />
        <Route path="/certificate" element={<VerifyCertificate />} />
        <Route path="/who" element={<Whoweare />} />
        <Route path="/reach" element={<Reachus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/challenges" element={<Challenges />} />
        <Route path="/dashboard/community" element={<CommunityGrid />} />
        <Route path="/dashboard/coursecard" element={<CourseCard />} />
        <Route path="/dashboard/intern" element={<Intern />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/challengesprocess" element={<ChallengesProcess />} />
        <Route path="/dashboard/resources" element={<div>Resources Page</div>} />
        <Route path="/dashboard/projects" element={<div>Projects Page</div>} />
        <Route path="/dashboard/certificates" element={<div>Certificates Page</div>} />
      </Routes>
      <BottomNavbarWrapper />
      <FooterWrapper />
    </Router>
  );
};

export default App;