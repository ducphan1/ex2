import React from "react";
import bannerImage from "../../assets/image/image.png";
import Search from "../../component/search";
import Select from "../../component/select";
const MyFavorite = () => {
  const listFilter = [
    {
      name: "Trạng thái",
      options: [
        { value: "active", label: "Đang kinh doanh" },
        { value: "deactive", label: "Ngừng kinh doanh" },
      ],
    },
    {
      name: "Danh mục",
      options: [
        { value: "tea", label: "Trà/Nước giải khát" },
        { value: "candy", label: "Kẹo/Bánh" },
      ],
    },
    {
      name: "Đã thêm gần đây",
      options: [{ value: "createdAt", label: "Đã thêm gần dây" }],
    },
  ];
  return (
    <div className="my-favorites">
      <div className="hero-text-section">
        <div className="hero-text">Yêu thích ngay</div>
      </div>
      <div className="banner-section">
        <div className="banner-image">
          <img src={bannerImage} alt="Favorite Image" />
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpl2R1wnCozdU1Uh5vmq7wvmuSM2Y6GUQVB57VvFupaYnjxKaqfsfkI6dkkttClounrp0&usqp=CAU" alt='Favorite Image' />
                <img src="src/MyShop/MyFavorite/download.jpeg" alt='Favorite Image' /> */}
        </div>
        <div className="banner-text">
          <div>
            Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm
            có ưu đãi
          </div>
        </div>
      </div>

      <div className="hero-text-section">
        <div className="hero-text">Mục yêu thích của bạn.</div>
      </div>

      <div>
        <Search placeHolder="Tìm kiếm" />

        <div className="d-flex" style={{ marginTop: "24px" }}>
          {listFilter.map((el, index) => (
            <Select
              key={index}
              name={el.name}
              options={el.options}
              style={{ marginRight: "16px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFavorite;
