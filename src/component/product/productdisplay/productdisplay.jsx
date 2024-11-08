// src/component/product/ProductDisplay.jsx
import React from "react";
import ProductImage from "../productimage/productimage";
import ProductDescription from "../productdescription/productdescription";
import Comment from "../../comment/comment";
import Note from "../../comment/note";
import "./productdisplay.css";

const ProductDisplay = ({ product }) => {
  return (
    <div className="product-display">
      {/* Hiển thị ảnh sản phẩm */}
      <ProductImage imageUrl={product.imageUrl} />

      {/* Hiển thị mô tả sản phẩm */}
      <ProductDescription description={product.description} />
      <p className="description">
        Ngũ hạt thập cẩm đặc sản Langfarm – Món ăn vặt ưa thích, hương vị thơm
        ngon, an
        <br />
        toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà.
      </p>

      {/* Phần bình luận */}
      <Comment comments={product.comments} />

      {/* Phần ghi chú */}
      <Note notes={product.notes} />
    </div>
  );
};

export default ProductDisplay;
