import MyFavorite from "./favorited/favorited";
import MyProduct from "./product/product";
import "./shop.css";

import localStorageHelper from "../helpper/localstoragehelper.js";
import image2 from "../assets/image/image 2.png";
const myProducts = [
  {
    id: 1,
    name: "Granola siêu hạt ăn kiêng 15% yến mạch",
    imageUrl: image2,
    rate: 3.5,
    price: "133.000 VNĐ",
    sale: 30,
    status: "còn hàng",
    classify: ["Nhỏ", "Vừa", "Lớn"],
    description:
      "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    createdAt: new Date("2024-05-01"),
  },
  {
    id: 2,
    name: "Hạnh nhân rang muối biển, 240g, hũ",
    price: "150.000 VNĐ",
    imageUrl: "src/assets/image/image 3.png",
    description:
      "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    rate: 3.5,
    sale: 30,
    classify: ["Nhỏ", "Vừa", "Lớn"],
    createdAt: new Date("2024-01-02"),
  },
  {
    id: 3,
    name: "Ngũ hạt thập cẩm, 135g, hũ",
    price: "42.000 VNĐ",
    imageUrl: "src/assets/image/image 4.png",
    description:
      "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    rate: 3.5,
    sale: 30,
    classify: ["Nhỏ", "Vừa", "Lớn"],
    createdAt: new Date("2024-06-03"),
  },
  {
    id: 4,
    name: "Đậu hà lan wasabi, 150g, hũ",
    price: "42.000 VNĐ",
    imageUrl: "src/assets/image/image 4.png",
    description:
      "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    rate: 3.5,
    sale: 30,
    classify: ["Nhỏ", "Vừa", "Lớn"],
    createdAt: new Date("2024-11-04"),
  },
  {
    id: 5,
    name: "Nước cốt dâu tằm, 300ml, chai",
    price: "54.000 VNĐ",
    imageUrl: "src/assets/image/image 5.png",
    description:
      "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    rate: 3.5,
    sale: 30,
    classify: ["Nhỏ", "Vừa", "Lớn"],
    createdAt: new Date("2024-01-02"),
  },
  {
    id: 6,
    name: "Trà sencha hoa hồng, 86g, hộp",
    price: "109.000 VNĐ",
    imageUrl: "src/assets/image/image 6.png",
    createdAt: new Date("2022-01-01"),
  },
  {
    id: 7,
    name: "Bột trà xanh matcha túi 4g",
    price: "36.000 VNĐ",
    imageUrl: "src/assets/image/image 7.png",
    createdAt: new Date("2024-01-01"),
  },
  {
    id: 8,
    name: "Bột rau má, 100g, bịch",
    price: "100.000 VNĐ",
    imageUrl: "src/assets/image/image 8.png",
    createdAt: new Date("2024-01-01"),
  },
  {
    id: 9,
    name: "Bột rau má, 100g, bịch",
    price: "100.000 VNĐ",
    imageUrl: "src/assets/image/image 8.png",
    createdAt: new Date("2024-01-01"),
  },
  {
    id: 10,
    name: "Granola siêu hạt ăn kiêng 15% yến mạch",
    imageUrl: "https://picsum.photos",
    rate: 3.5,
    price: "133.000 VNĐ",
    sale: 30,
    status: "còn hàng",
    classify: ["Nhỏ", "Vừa", "Lớn"],
    description:
      "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    createdAt: new Date("2024-05-01"),
  },
  {
    id: 11,
    name: "Hạnh nhân rang muối biển, 240g, hũ",
    price: "150.000 VNĐ",
    imageUrl: "https://picsum.photos",
    description:
      "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    rate: 3.5,
    sale: 30,
    classify: ["Nhỏ", "Vừa", "Lớn"],
    createdAt: new Date("2024-01-02"),
  },
  {
    id: 12,
    name: "Ngũ hạt thập cẩm, 135g, hũ",
    price: "42.000 VNĐ",
    imageUrl: "https://picsum.photos",
    description:
      "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    rate: 3.5,
    sale: 30,
    classify: ["Nhỏ", "Vừa", "Lớn"],
    createdAt: new Date("2024-06-03"),
  },
  {
    id: 13,
    name: "Đậu hà lan wasabi, 150g, hũ",
    price: "42.000 VNĐ",
    imageUrl: "https://picsum.photos",
    description:
      "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    rate: 3.5,
    sale: 30,
    classify: ["Nhỏ", "Vừa", "Lớn"],
    createdAt: new Date("2024-11-04"),
  },
];

localStorageHelper.set("products", myProducts);

const MyShop = () => {
  return (
    <div className="my-shop">
      <MyFavorite />
      <MyProduct />
    </div>
  );
};

export default MyShop;
