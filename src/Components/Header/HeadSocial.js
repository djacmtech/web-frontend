import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import "../Header/Header.css";
const HeadSocial = () => {
  return (
    <div className="HeaderSocial">
    <IconContext.Provider value={{size:'1.2rem',className:'iconPosition'}}>

      <a href="#I" className="socialLinks">
        <BsInstagram />
        &nbsp; djsanghvi_acm
      </a>
      <a href="#F" className="socialLinks">
        <BsFacebook />
        &nbsp; djscoe.acm
      </a>
      <a href="#L" className="socialLinks">
        <BsLinkedin />
        &nbsp; DJ Sanghvi ACM
      </a>
    </IconContext.Provider>
    </div>
  );
};

export default HeadSocial;
