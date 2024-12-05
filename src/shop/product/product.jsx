import { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./product.css";
import ModalDetailProduct from "./detailproduct/modaldetail";
import CreateProductModal from "../product/createproduct/createproduct";
import Paging from "./pagging/pagging";
import { Button } from "antd";
import localStorageHelper from "../../helpper/localstoragehelper.js";
import moment from "moment";
import { Link, useSearchParams } from "react-router-dom";

const MyProduct = () => {
  const listProduct = localStorageHelper.get("products");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [productsState, setProductsState] = useState(listProduct);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageSize, page] = [
    searchParams.get("pageSize") || 8,
    searchParams.get("page") || 1,
  ];
  const onClickProduct = (item) => {
    showModal();
    setCurrentItem(item);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCreateProduct = (product) => {
    setProductsState((pre) => [
      ...pre,
      { id: productsState.length + 1, ...product },
    ]);
    console.log("sản phẩm đã thêm mới", product);
    setIsCreateModalOpen(false);
  };
  const getCurrentPageProducts = (page, pageSize) => {
    const startIndex = Number(page);
    const endIndex = Number(page) + Number(pageSize);
    let tem = listProduct.slice(startIndex, endIndex);
    setProductsState(tem);
  };

  const onPageChange = (page, pageSize) => {
    setSearchParams({ page, pageSize });
    getCurrentPageProducts(page, pageSize);
  };
  useEffect(() => {
    getCurrentPageProducts(page || 1, pageSize || 8);
  }, [productsState]);

  return (
    <div className="product-container">
      <div className="d-flex">
        <div className="float-left product-hero-text">Quà Tặng</div>
        <Button
          className="float-right product-create-button"
          onClick={() => setIsCreateModalOpen(true)}
        >
          Tạo
        </Button>
      </div>
      <div className="product-items">
        {productsState.map((item, index) => (
          <div key={index} className="product-item">
            <img
              className="pointer img-cus"
              src={item.imageUrl}
              alt={item.name}
              onClick={() => onClickProduct(item)}
            />
            <div className="item-details">
              <Link to={`/productDetail/${item.id}`}>
                <span className="item-name">{item.name}</span>
              </Link>

              <button className="cart-button">
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
              </button>
            </div>
            <p>
              {item.price} {moment(item.createdAt).format("HH:MM DD-MM-yyyy")}
            </p>
          </div>
        ))}
      </div>
      <Paging
        page={page}
        pageSize={pageSize}
        total={listProduct.length}
        onPageChange={onPageChange}
      />

      <ModalDetailProduct
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
        item={currentItem}
      />
      <CreateProductModal
        isModalOpen={isCreateModalOpen}
        handleOk={handleCreateProduct}
        handleCancel={() => {
          setIsCreateModalOpen(false);
        }}
      />
    </div>
  );
};

export default MyProduct;
