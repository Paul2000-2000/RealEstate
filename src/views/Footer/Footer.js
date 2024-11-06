import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-left-title"> Paul</p>
          <p className="footer-left-desc">
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        <div className="footer-right">
          <div>
            <h1 className="footer-right-title">Information</h1>
            <p className="footer-right-desc">145 New York, FL 5467, USA</p>
          </div>
          <ul className="footer-right-ul">
            <li className="footer-right-li">Property</li>
            <li className="footer-right-li">Services</li>
            <li className="footer-right-li">Product</li>
            <li className="footer-right-li">About us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
