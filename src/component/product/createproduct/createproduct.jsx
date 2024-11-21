import { useState } from "react";
import { Modal, Input, Typography } from "antd";
import "./createproduct.css";

const CreateProductModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const [product, setProduct] = useState({});

  const onProductChange = (value, key) => {
    setProduct((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={() => handleOk(product)}
      okText="Lưu sản phẩm"
      onCancel={handleCancel}
      title="Tạo sản phẩm mới"
      width={800}
    >
      {fields.map((field) => (
        <div key={field.key} className="modal-field">
          <Typography.Text>{field.title}</Typography.Text>
          <Input
            type={field.type || "text"}
            onChange={(e) => onProductChange(e.target.value, field.key)}
          />
        </div>
      ))}
    </Modal>
  );
};

export default CreateProductModal;

const fields = [
  { title: "Tên sản phẩm", key: "name" },
  { title: "Link hình ảnh", key: "imageUrl" },
  { title: "Đánh giá", key: "rate", type: "number" },
  { title: "Giá", key: "price", type: "number" },
  { title: "Giảm giá (%)", key: "sale", type: "number" },
  { title: "Trạng thái", key: "status" },
  { title: "Phân loại", key: "classify" },
  { title: "Mô tả", key: "description" },
  { title: "Ngày tạo", key: "createdAt", type: "date", isHidden: true },
];
