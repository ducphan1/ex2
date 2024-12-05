import React, { useState } from "react";
import { Modal, Input } from "antd";

// Define your fields array
const fileds = [
  { title: "Tên sản phẩm", key: "name", type: "text" },
  { title: "Link ảnh", key: "imageUrl", type: "text" },
  { title: "Đánh giá", key: "rate", type: "number" },
  { title: "Giá", key: "price", type: "number" },
  { title: "Giảm giá (%)", key: "sale", type: "number" },
  { title: "Trạng thái", key: "status", type: "text" },
  { title: "Phân Loại", key: "classify", type: "text" },
  { title: "Mô tả", key: "description", type: "text" },
  { title: "Ngày tạo", key: "createdAt", type: "date", isHidden: true },
];

const CreateProductModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const [product, setProduct] = useState({});

  const onHandelProductChange = (value, key) => {
    let temp = { ...product }; // Copy product object to avoid direct mutation
    temp[key] = value;
    setProduct(temp);
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={() => handleOk(product)}
      okText="Lưu sản phẩm"
      onCancel={handleCancel}
      width={800}
      title="Create new product"
      style={{ borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} // Modal styles
    >
      <div>
        {fileds.map((el) => (
          <div key={el.key}>
            {el.isHidden ? (
              <></>
            ) : (
              <div style={{ display: "flex", paddingBottom: "10px" }}>
                <div style={{ width: "200px" }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#383838",
                      textAlign: "left",
                    }}
                  >
                    {el.title}
                  </p>
                </div>
                <Input
                  type={el.type || "text"}
                  onChange={(event) =>
                    onHandelProductChange(event.target.value, el.key)
                  }
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    fontSize: "16px",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                    marginLeft: "10px",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default CreateProductModal;
