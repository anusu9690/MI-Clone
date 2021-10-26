import React from "react";
import "../styles/ProductReviewCard.css";

const ProductReviewCard = ({ price, name, image, review }) => {
  return (
    <div className="productReviewCard">
      <img src={image} alt="ProductImage" />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default ProductReviewCard;
