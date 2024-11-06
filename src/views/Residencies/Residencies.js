import React from "react";
import "./Residencies.css";
import Equnix from "./../../assests/residencies/equinix.png";
import Prologis from "./../../assests/residencies/prologis.png";
import Tower from "./../../assests/residencies/tower.png";
import Realty from "./../../assests/residencies/realty.png";

import data from "../../data/listresidencies.js";
import Residencie from "../../components/residencie/Residencie.js";

const Residencies = () => {
  return (
    <div className="residencies">
      <div className="residencies-content">
        <div className="residencies-images">
          <img src={Equnix} className="residencies-images-img" alt="" />
          <img src={Prologis} className="residencies-images-img" alt="" />
          <img src={Tower} className="residencies-images-img" alt="" />
          <img src={Realty} className="residencies-images-img" alt="" />
        </div>
        <h1 className="residencies-content-firsth">Best Choices</h1>
        <h2 className="residencies-content-secondh">Popular Residencies</h2>
        <div className="residencies-content-list">
          {data.map((residencies) => (
            <Residencie
              key={residencies.id}
              image={residencies.image}
              money={residencies.money}
              name={residencies.name}
              description={residencies.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Residencies;
