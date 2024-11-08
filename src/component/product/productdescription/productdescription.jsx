// src/component/product/ProductDescription.jsx
import React, { useState } from "react";
import "./productdescryption.css";

const ProductDescription = ({ description }) => {
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const selectSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-card">
      <h3>Ngũ hạt thập cẩm, hũ trang trí ý nghĩa</h3>

      <div className="rating">
        <span>⭐⭐⭐⭐☆</span>
      </div>

      <div className="price">
        <span className="original-price">Giá: 42.000 VND</span>
        <span className="discount">-30%</span>
      </div>

      <div className="size-selection">
        <p>Phân loại</p>
        <button
          className={`size-button ${selectedSize === "nho" ? "selected" : ""}`}
          onClick={() => selectSize("nho")}
        >
          Nhỏ
        </button>
        <button
          className={`size-button ${selectedSize === "vua" ? "selected" : ""}`}
          onClick={() => selectSize("vua")}
        >
          Vừa
        </button>
        <button
          className={`size-button ${selectedSize === "lon" ? "selected" : ""}`}
          onClick={() => selectSize("lon")}
        >
          Lớn
        </button>
      </div>

      <div className="quantity-selector">
        <button className="quantity-button" onClick={handleDecrease}>
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-button" onClick={handleIncrease}>
          +
        </button>
      </div>

      <button className="buy-button">Chọn mua</button>
    </div>
  );
};

export default ProductDescription;
