import React from "react";
import "./Residencie.css";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Residencie = ({ id, image, money, name, description }) => {
  return (
    <div className="residencie">
      <img src={image} alt="" className="residencie-img" />
      <div className="residencie-money">
        <RiMoneyDollarCircleLine className="residencie-money-icon" />
        <p>{money}</p>
      </div>
      <h2 className="residencie-name">{name}</h2>
      <p className="residencie-description">{description}</p>
    </div>
  );
};

export default Residencie;
