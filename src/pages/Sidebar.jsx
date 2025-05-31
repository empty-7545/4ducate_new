import React from 'react';
import { Book, FileText, Folder, Users, Medal } from 'lucide-react';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/Sidebar.css';

function Sidebar() {
  return (
    <div className="bottom-navbar">
      <div className="nav-item1 ">
      <i className="bi bi-house-fill"></i>
       
      </div>
      <div className="nav-item1">
      <i className="bi bi-book-fill"></i>
        
      </div>
      <div className="nav-item1">
      <i className="bi bi-patch-check-fill"></i>
       
      </div>
      <div className="nav-item1">
      <i className="bi bi-info-circle-fill"></i>
      
      </div>
      <div className="nav-item1">
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  );
}

export default Sidebar;