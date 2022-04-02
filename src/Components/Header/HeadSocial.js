import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import "../Header/Header.css";
const HeadSocial = () => {
  return (
    <div className="HeaderSocial">
    <IconContext.Provider value={{size:'1.2rem',className:'iconPosition'}}>

      <a href="https://www.instagram.com/djsanghvi_acm/?hl=en" className="socialLinks" target="_blank" rel="noreferrer">
        <BsInstagram />
        &nbsp;
        <span>djsanghvi_acm</span> 
      </a>
      <a href="https://www.facebook.com/djscoe.acm.5" className="socialLinks" target="_blank" rel="noreferrer">
        <BsFacebook />
        &nbsp; 
        <span>djscoe.acm</span> 
      </a>
      <a href="https://in.linkedin.com/company/dj-sanghvi-acm" className="socialLinks" target="_blank" rel="noreferrer">
        <BsLinkedin />
        &nbsp;
        <span>DJ Sanghvi ACM</span> 
      </a>
    </IconContext.Provider>
    </div>
  );
};

export default HeadSocial;
