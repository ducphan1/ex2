import React, { useState } from "react";
import { Modal, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./gift.css";

import image1 from "../../assets/image/image 2.png";
import image2 from "../../assets/image/image 3.png";
import image3 from "../../assets/image/image 4.png";
import image4 from "../../assets/image/image 5.png";
import image5 from "../../assets/image/image 6.png";
import image6 from "../../assets/image/image 7.png";
import image7 from "../../assets/image/image 8.png";
import image8 from "../../assets/image/image 9.png";

const GiftItem = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const giftItems = [
    {
      id: 1,
      name: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VNĐ",
      imageUrl: image1,
      description: "Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh",
    },
    {
      id: 2,
      name: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VNĐ",
      imageUrl: image2,
      description: "Hạnh nhân rang muối biển, ngon miệng, giàu dưỡng chất",
    },
    {
      id: 3,
      name: "Ngũ hạt thập cẩm, 135g, hũ",
      price: "42.000 VNĐ",
      imageUrl: image3,
      description: "Ngũ hạt thập cẩm thơm ngon, đầy đủ dưỡng chất",
    },
    {
      id: 4,
      name: "Đậu hà lan wasabi, 150g, hũ",
      price: "42.000 VNĐ",
      imageUrl: image4,
      description: "Đậu hòa lan với hương vị wasabi đặc biệt",
    },
    {
      id: 5,
      name: "Nước cốt dâu tằm, 300ml, chai",
      price: "54.000 VNĐ",
      imageUrl: image5,
      description: "Nước cốt dâu tằm, thanh mát, giải nhiệt",
    },
    {
      id: 6,
      name: "Trà sencha hoa hồng, 86g, hộp",
      price: "109.000 VNĐ",
      imageUrl: image6,
      description: "Trà sencha hoa hồng nhẹ nhàng, thư giãn",
    },
    {
      id: 7,
      name: "Bột trà xanh matcha túi 4g",
      price: "36.000 VNĐ",
      imageUrl: image7,
      description: "Bột trà xanh matcha nguyên chất, giàu antioxidants",
    },
    {
      id: 8,
      name: "Bột rau má, 100g, bịch",
      price: "100.000 VNĐ",
      imageUrl: image8,
      description: "Bột rau má tốt cho sức khỏe, thanh nhiệt",
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="gift-container">
      <div className="gift-items">
        {giftItems.map((item) => (
          <div
            key={item.id}
            className="gift-item"
            onClick={() => handleProductClick(item)}
          >
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <button className="cart-button">
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
              </button>
            </div>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      <Modal
        title={selectedProduct?.name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Đóng
          </Button>,
        ]}
      >
        {selectedProduct && (
          <div className="product-detail">
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <p>
              <strong>Giá: </strong>
              {selectedProduct.price}
            </p>
            <p>
              <strong>Phân loại: </strong>Vừa
            </p>
            <p>
              <strong>Mô tả: </strong>
              {selectedProduct.description}
            </p>
            <div>
              <strong>Số lượng: </strong>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
            <button className="add-to-cart-btn">Chọn mua</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GiftItem;
