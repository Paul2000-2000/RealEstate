import { React, useState } from "react";
import "./Navbar.css";
import { MdOutlineSegment } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav>
      <div className="nav-content">
        <div className="nav-left">
          <p className="nav-left-name">Homyz</p>
          <div className="nav-left-circle"></div>
        </div>
        <ul className="nav-right">
          <li className="nav-right-el">Residencies</li>
          <li className="nav-right-el">Our Value</li>
          <li className="nav-right-el">Contact us</li>
          <li className="nav-right-el">Get Started</li>
          <button className="nav-right-btn">Contact</button>
        </ul>
        <MdOutlineSegment
          className="button-nav-resp-big "
          onClick={() => setIsActive(!isActive)}
        />
        {isActive && (
          <ul className="nav-right-resp">
            <li className="nav-right-resp-el">Residencies</li>
            <li className="nav-right-resp-el">Our Value</li>
            <li className="nav-right-resp-el">Contact us</li>
            <li className="nav-right-resp-el">Get Started</li>
            <button className="nav-right-resp-btn">Contact</button>
            <IoMdClose
              onClick={() => setIsActive(!isActive)}
              className="close-btn-resp"
            />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
