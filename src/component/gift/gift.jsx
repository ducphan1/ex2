import { ShoppingCartOutlined } from "@ant-design/icons";
import "./gift.css";

// Import trực tiếp các ảnh
import image1 from "../../assets/image/image 2.png";
import image2 from "../../assets/image/image 3.png";
import image3 from "../../assets/image/image 4.png";
import image4 from "../../assets/image/image 5.png";
import image5 from "../../assets/image/image 6.png";
import image6 from "../../assets/image/image 7.png";
import image7 from "../../assets/image/image 8.png";
import image8 from "../../assets/image/image 9.png";

const GiftItem = ({ onProductClick }) => {
  const giftItems = [
    {
      id: 1,
      name: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VNĐ",
      imageUrl: image1,
    },
    {
      id: 2,
      name: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VNĐ",
      imageUrl: image2,
    },
    {
      id: 3,
      name: "Ngũ hạt thập cẩm, 135g, hũ",
      price: "42.000 VNĐ",
      imageUrl: image3,
    },
    {
      id: 4,
      name: "Đậu hòa lan wasabi, 150g, hũ",
      price: "42.000 VNĐ",
      imageUrl: image4,
    },
    {
      id: 5,
      name: "Nước cốt dâu tằm, 300ml, chai",
      price: "54.000 VNĐ",
      imageUrl: image5,
    },
    {
      id: 6,
      name: "Trà sencha hoa hồng, 86g, hộp",
      price: "109.000 VNĐ",
      imageUrl: image6,
    },
    {
      id: 7,
      name: "Bột trà xanh matcha túi 4g",
      price: "36.000 VNĐ",
      imageUrl: image7,
    },
    {
      id: 8,
      name: "Bột rau má, 100g, bịch",
      price: "100.000 VNĐ",
      imageUrl: image8,
    },
  ];

  const handleProductClick = (product) => {
    if (onProductClick) {
      onProductClick(product);
    }
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
    </div>
  );
};

export default GiftItem;
