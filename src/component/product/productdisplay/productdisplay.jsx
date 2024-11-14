import React, { useState } from "react";
import "./productdisplay.css";

const ProductDisplay = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="product-item" onClick={handleOpenModal}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              ×
            </span>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="modal-image"
            />
            <div className="modal-details">
              <h2>{product.name}</h2>
              <p className="modal-price">{product.price}</p>
              <div className="rating">
                <span>⭐⭐⭐⭐</span>
              </div>
              <p>{product.description}</p>
              <div className="modal-actions">
                <button className="buy-btn">Chọn mua</button>
                <button className="close-btn" onClick={handleCloseModal}>
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDisplay;
