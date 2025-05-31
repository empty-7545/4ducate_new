import React from 'react';
import { Menu, Bell, User } from 'lucide-react';
import '../css/ProfileNav.css';

function ProfileNav({ isMobile }) {
  return (
    <div className="profile-nav">
      <div className="profile-nav-left">
        {isMobile && <Menu className="menu-icon" />}
        <h2>Classroom</h2>
      </div>
      <div className="profile-nav-right">
        <Bell className="notification-icon" />
        <div className="profile-icon">
          <User />
        </div>
      </div>
    </div>
  );
}

export default ProfileNav;