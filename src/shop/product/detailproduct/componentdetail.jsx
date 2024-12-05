import {} from "react";
import { Button, Rate } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
const ComponnentDetai = ({ item }) => {
  return (
    <div className="detail-item">
      <div className="d-flex" style={{ gap: "30px" }}>
        <img className="detail-image" src={item.imageUrl} alt={item.name} />
        <div className="pl-46px">
          <div>
            <div className="detail-name">{item.name}</div>
            <div>
              <Rate allowHalf defaultValue={item.rate} disabled={true} />
            </div>
            <div className="detail-price">
              <div style={{ whiteSpace: "pre" }}>Giá: {item.price}</div>
              <div className="detail-discount">{item.sale}</div>
            </div>

            <div className="detail-classify">
              <div className="">Phân loại</div>
              <div className="d-flex jc-space-between mt-34px">
                {item.classify?.map((el, idx) => (
                  <div className="classify" key={idx}>
                    {el}
                  </div>
                ))}
              </div>
            </div>

            <div className="cart">
              <div className="quantity">
                <div className="icon">
                  <MinusOutlined />
                </div>
                <div>0</div>
                <div className="icon">
                  <PlusOutlined />
                </div>
              </div>
              <div>
                <Button className="buy-button">Chọn mua</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>{item.description}</p>
    </div>
  );
};

export default ComponnentDetai;
