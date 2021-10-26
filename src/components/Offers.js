import React from "react";
import Offer from "./Offer.js";
import "../styles/Offers.css";

const Offers = ({ offer }) => {
  return (
    <div className="offerSection">
      {offer.map(function (item, index) {
        return (
          <Offer
            key={item.image}
            index={index}
            src={item.image}
            link={item.url}
          />
        );
      })}
    </div>
  );
};

export default Offers;
