import React from "react";
import "./Hero.css";
import { FaPlus } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import HeroImage from "../../assests/hero-image.png";
import Navbar from "../../components/navbar/Navbar.js";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-left-title">Discover Most Suitable Property</h1>
          <p className="hero-left-subtitle">
            Find a variety of properties that suit you very easilty Forget all
            difficulties in finding a residence for you
          </p>
          <div className="hero-left-inpt">
            <CiLocationOn className="hero-left-inpt-ic" />
            <input className="hero-left-input" type="text" />
            <button className="hero-left-btn">Search</button>
          </div>
          <div className="hero-left-numbers">
            <div className="hero-left-numbers-item">
              <span className="hero-left-numbers-item-sp">
                9,000 <FaPlus className="hero-left-numbers-item-ic" />
              </span>
              <p className="hero-nleft-numbers-item-p">Premium Product</p>
            </div>
            <div className="hero-left-numbers-item">
              <span className="hero-left-numbers-item-sp">
                2,000 <FaPlus className="hero-left-numbers-item-ic" />
              </span>
              <p className="hero-nleft-numbers-item-p">Happy Customer</p>
            </div>
            <div className="hero-left-numbers-item">
              <span className="hero-left-numbers-item-sp">
                28 <FaPlus className="hero-left-numbers-item-ic" />
              </span>
              <p className="hero-nleft-numbers-item-p">Awards Winning</p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={HeroImage} alt="" className="hero-right-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
