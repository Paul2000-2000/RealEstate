import React from "react";
import ValueImage from "../../assests/valueimage.png";
import { MdSecurity } from "react-icons/md";
import { CiSquareChevDown } from "react-icons/ci";
import "./Value.css";
import { useState } from "react";

const Value = () => {
  const [isDesc1Visible, setIsDesc1Visible] = useState(true);
  const [isDesc2Visible, setIsDesc2Visible] = useState(false);
  const [isDesc3Visible, setIsDesc3Visible] = useState(false);

  return (
    <div className="value">
      <div className="value-content">
        <div className="value-left">
          <img src={ValueImage} alt="" className="value-left-image" />
        </div>
        <div className="value-right">
          <h2 className="value-right-firsth">Our Value</h2>
          <h2 className="value-right-secondh">Value We Give to You</h2>
          <p className="value-right-desc">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </p>
          <div className="value-right-div">
            <div className="value-right-interest">
              <MdSecurity />
              <p>Best interest rates on the market</p>
              <CiSquareChevDown
                onClick={() => setIsDesc1Visible(!isDesc1Visible)}
              />
            </div>
            {isDesc1Visible && (
              <p className="value-right-div-desc">
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            )}
          </div>
          <div className="value-right-div">
            <div className="value-right-interest">
              <MdSecurity />
              <p>Prevent unstable prices</p>
              <CiSquareChevDown
                onClick={() => setIsDesc2Visible(!isDesc2Visible)}
              />
            </div>
            {isDesc2Visible && (
              <p className="value-right-div-desc">
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            )}
          </div>
          <div className="value-right-div">
            <div className="value-right-interest">
              <MdSecurity />
              <p>Best price on market</p>
              <CiSquareChevDown
                onClick={() => setIsDesc3Visible(!isDesc3Visible)}
              />
            </div>
            {isDesc3Visible && (
              <p className="value-right-div-desc">
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
