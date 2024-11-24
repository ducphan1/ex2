import { useState, useEffect } from "react";
import { Modal, Button, Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./gift.css";
import moment from "moment";
import CreateProductModal from "../product/createproduct/createproduct";

import image1 from "../../assets/image/image 2.png";
import image2 from "../../assets/image/image 3.png";
import image3 from "../../assets/image/image 4.png";
import image4 from "../../assets/image/image 5.png";
import image5 from "../../assets/image/image 6.png";
import image6 from "../../assets/image/image 7.png";
import image7 from "../../assets/image/image 8.png";
import image8 from "../../assets/image/image 9.png";

const GiftItem = () => {
  const [isProductModalVisible, setIsProductModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [giftItems, setGiftItems] = useState([]);

  useEffect(() => {
    const savedGiftItems = localStorage.getItem("giftItems");
    if (savedGiftItems) {
      setGiftItems(JSON.parse(savedGiftItems));
    } else {
      const defaultGiftItems = [
        {
          id: 1,
          name: "Granola siêu hạt ăn kiêng 15% yến mạch",
          price: "133.000 VNĐ",
          imageUrl: image1,
          description:
            "Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh",
          createdAt: new Date(),
        },
        {
          id: 2,
          name: "Hạnh nhân rang muối biển, 240g, hũ",
          price: "150.000 VNĐ",
          imageUrl: image2,
          description: "Hạnh nhân rang muối biển, ngon miệng, giàu dưỡng chất",
          createdAt: new Date(),
        },
        {
          id: 3,
          name: "Ngũ hạt thập cẩm, 135g, hũ",
          price: "42.000 VNĐ",
          imageUrl: image3,
          description: "Ngũ hạt thập cẩm thơm ngon, đầy đủ dưỡng chất",
          createdAt: new Date(),
        },
        {
          id: 4,
          name: "Đậu hà lan wasabi, 150g, hũ",
          price: "42.000 VNĐ",
          imageUrl: image4,
          description: "Đậu hòa lan với hương vị wasabi đặc biệt",
          createdAt: new Date(),
        },
        {
          id: 5,
          name: "Nước cốt dâu tằm, 300ml, chai",
          price: "54.000 VNĐ",
          imageUrl: image5,
          description: "Nước cốt dâu tằm, thanh mát, giải nhiệt",
          createdAt: new Date(),
        },
        {
          id: 6,
          name: "Trà sencha hoa hồng, 86g, hộp",
          price: "109.000 VNĐ",
          imageUrl: image6,
          description: "Trà sencha hoa hồng nhẹ nhàng, thư giãn",
          createdAt: new Date(),
        },
        {
          id: 7,
          name: "Bột trà xanh matcha túi 4g",
          price: "36.000 VNĐ",
          imageUrl: image7,
          description: "Bột trà xanh matcha nguyên chất, giàu antioxidants",
          createdAt: new Date(),
        },
        {
          id: 8,
          name: "Bột rau má, 100g, bịch",
          price: "100.000 VNĐ",
          imageUrl: image8,
          description: "Bột rau má tốt cho sức khỏe, thanh nhiệt",
          createdAt: new Date(),
        },
      ];
      setGiftItems(defaultGiftItems);
      localStorage.setItem("giftItems", JSON.stringify(defaultGiftItems));
    }
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductModalVisible(true);
  };

  const handleCreateProduct = (newProduct) => {
    const updatedGiftItems = [...giftItems, newProduct];
    setGiftItems(updatedGiftItems);
    localStorage.setItem("giftItems", JSON.stringify(updatedGiftItems));
    setIsCreateModalVisible(false);
  };

  const handleAddToCart = () => {
    console.log("Thêm vào giỏ hàng:", selectedProduct.name);
    setIsProductModalVisible(false);
  };

  const handleDeleteProduct = (id) => {
    const updatedGiftItems = giftItems.filter((item) => item.id !== id);
    setGiftItems(updatedGiftItems);
    localStorage.setItem("giftItems", JSON.stringify(updatedGiftItems));
  };

  return (
    <div className="gift-container">
      <div className="gift-header">
        <h1>Quà tặng</h1>
        <button
          className="create-button"
          onClick={() => setIsCreateModalVisible(true)}
        >
          Tạo mới
        </button>
      </div>

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
            <div className="item-price-date">
              <span className="price">{item.price}</span>
              <span className="created-at">
                {moment(item.createdAt).format("DD-MM-YYYY")}
              </span>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDeleteProduct(item.id)}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal
          visible={isProductModalVisible}
          onCancel={() => setIsProductModalVisible(false)}
          footer={null}
          width={800}
        >
          <div className="product-detail">
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="product-image"
            />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p className="price">{selectedProduct.price}</p>
            <p>
              Ngày tạo: {moment(selectedProduct.createdAt).format("DD-MM-YYYY")}
            </p>
            <div>
              <Input
                placeholder="Số lượng"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <Input
                placeholder="Ghi chú"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <Button
              type="primary"
              onClick={handleAddToCart}
              className="add-to-cart-btn"
            >
              Thêm vào giỏ
            </Button>
          </div>
        </Modal>
      )}

      <CreateProductModal
        isModalOpen={isCreateModalVisible}
        handleOk={handleCreateProduct}
        handleCancel={() => setIsCreateModalVisible(false)}
      />
    </div>
  );
};

export default GiftItem;
