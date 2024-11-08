import React from "react";
import "./productDetail.css";

function ProductDetail() {
  return (
    <div className="product-detail">
      <p>Phân loại:</p>
      <label>
        <input type="radio" name="size" value="small" /> Nhỏ
      </label>
      <label>
        <input type="radio" name="size" value="medium" /> Vừa
      </label>
      <label>
        <input type="radio" name="size" value="large" /> Lớn
      </label>
    </div>
  );
}

export default ProductDetail;
