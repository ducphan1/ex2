import React from "react";
import "./productdetail.css";

function ProductDetail() {
  return (
    <div className="product-detail">
      <p
        className="product-1"
        style={{
          position: "absolute",
          width: "425px",
          height: "38px",
          left: "0px",
          top: "239px",
          fontFamily: "'Be Vietnam'",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "26px",
          lineHeight: "38px",
          color: "#383838",
        }}
      >
        Phân loại:
      </p>
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
