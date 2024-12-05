import React from "react";
import { useParams } from "react-router-dom";
import localStorageHelper from "../../../helpper/localstoragehelper.js";
import ComponnentDetai from "./componentdetail.jsx";

const PageDetailProduct = () => {
  let { productId } = useParams();

  const listProduct = localStorageHelper.get("products");
  const curProduct = listProduct.find((el) => el.id == productId);

  console.log("productId", curProduct);
  if (curProduct)
    return (
      <div>
        <ComponnentDetai item={curProduct} />
      </div>
    );
  else return <div>Not Found Product</div>;
};

export default PageDetailProduct;
