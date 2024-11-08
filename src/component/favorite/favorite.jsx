import "./favorite.css";
import image from "../../assets/image/image.png";

const FavoriteIntro = () => {
  return (
    <div className="favorite-intro">
      <h2>Yêu thích ngay</h2>
      <div className="favorite-content">
        <img src={image} alt="image" />
        <p>
          Thêm ngay vào mục yêu
          <br />
          thích để nhận được thông
          <br />
          báo mỗi khi sản phẩm có
          <br />
          ưu đãi
        </p>
      </div>
      <h2>Mục yêu thích của bạn</h2>
    </div>
  );
};

export default FavoriteIntro;
