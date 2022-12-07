import React, { useState} from 'react';
import './sidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import Confirmation from "../confirmation";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ClassIcon from '@mui/icons-material/Class';
const Sidebar = () => {
  const [isOpen,
    setIsOpen] = useState(false)
  const style = {
    textDecoration: "none"
  }

  const handleConfirm = (isConfirm) => {
    if(isConfirm){
      localStorage.removeItem("access_token")
      window.location.replace('/login')
    }
  }
  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <div className='sidebar-container'>
      <div className="center">
        <ul>
          <div className="title">
            {/*<SchoolIcon className="icon"/>*/}
            <img src="https://www.itpd.ac.ke/wp-content/uploads/2021/07/onlineteacher.png"/>
            <h2>School</h2>

          </div>
          <Link to="/admin" style={style}>
            <li>
              <AdminPanelSettingsIcon className="icon"/>
              <span>Admin</span>
            </li>
          </Link>
          <Link to="/dashboard" style={style}>
            <li>
              <HomeIcon className="icon"/>
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/teacher" style={style}>
            <li>
              <Diversity1Icon className="icon"/>
              <span>Teachers</span>
            </li>
          </Link>
          <li>
            <Link to="/student" style={style}>
              <Diversity3Icon className="icon"/>
              <span>Students</span>
            </Link>
          </li>

          <li>
            <Link to="/room" style={style}>
              <ClassIcon className="icon"/>
              <span>Class</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" style={style}>
              <SettingsIcon className="icon"/>
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" style={style}>
              <ContactPageIcon className="icon"/>
              <span>Contact us</span>
            </Link>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span onClick={handleClick}>Log out</span>
          </li>
          <li>
            <Confirmation handleConfirm={handleConfirm} isOpen={isOpen} setIsOpen={setIsOpen}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;