import React from "react";
import ProductReviewCard from "./ProductReviewCard";
import "../styles/ProductReviews.css";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="productReviews">
      {productReviews.map(function (item, index) {
        return (
          <ProductReviewCard
            price={item.price}
            name={item.name}
            image={item.image}
            review={item.review}
            key={item.image}
          />
        );
      })}
    </div>
  );
};

export default ProductReviews;
