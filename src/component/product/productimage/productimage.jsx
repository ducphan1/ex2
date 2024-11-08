// src/component/product/ProductImage.jsx
import React from "react";
import "./productImage.css";

const ProductImage = ({ imageUrl }) => {
  return (
    <div className="product-image">
      <img src={imageUrl} alt="Product" />
    </div>
  );
};

export default ProductImage;
