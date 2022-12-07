import React from "react";
import "./navbar.scss";
import {useState} from "react";
import logo from "./assets/lsogo.png";
import Popup from "reactjs-popup";
import Login from "../../pages/auth/login";
import Register from "../../pages/auth/register";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="leftimg">
          <img style={{width: "142px"}} src={logo} alt=""/>
        </div>
        <div className="navigation">
          {/*<Link to="/home"> <span className="span1">HOME</span></Link>*/}
          {/*<Link to="/about"> <span>ABOUT</span></Link>*/}
          {/*<Link to="/news"> <span className="span1">NEWS</span></Link>*/}
          {/*<Link to="/blogs"> <span className="span1">BLOGS</span></Link>*/}
          {/*<Link to="/gallery"> <span className="span1">GALLERY</span></Link>*/}
          {/*<Link to="/contact"> <span className="span1">CONTACT US</span></Link>*/}
          <a href="#home"><span className="span1">HOME</span></a>
          <a href="#about"><span>ABOUT</span></a>
          <a href="#news"><span className="span1">NEWS</span></a>
          <a href="#news"><span className="span1">BLOGS</span></a>
          <a href="#news"><span className="span1">GALLERY</span></a>
          <a href="#contact"><span className="span1">CONTACT US</span></a>
        </div>
        <div className="right ">
          <div className="popup">
            <Popup modal nested className="popup miban" style={{backdropFilter: 'blur(10px)'}}
                   trigger={<span>login</span>}
                   position="center">
              <div className="pop-up"><Login/></div>
            </Popup>
            <span>/</span>
            <Popup modal nested className="popup miban" trigger={<span>register</span>}
                   position="center">
              <div className="pop-up"><Register/></div>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;