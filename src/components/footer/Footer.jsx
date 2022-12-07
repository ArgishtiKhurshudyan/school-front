import React from 'react';
import "./footer.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logos-websites">
        <InstagramIcon style={{color: "white", fontSize: "30px", cursor: "pointer"}}/>
        <FacebookIcon style={{color: "white", fontSize: "30px", cursor: "pointer"}}/>
        <TwitterIcon style={{color: "white", fontSize: "30px",  cursor:"pointer"}}/>
      </div>
    </div>
  );
};

export default Footer;