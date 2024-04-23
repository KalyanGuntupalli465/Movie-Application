import React from "react";
import {
   FaGithub,
  
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
         
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Made By Mohan Kalyan Guntupalli
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a style={{ color: "white" }} href="https://github.com/KalyanGuntupalli465"><FaGithub /></a>
          </span>
         
          
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;