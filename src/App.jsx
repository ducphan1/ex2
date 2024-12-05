import { Routes, Route } from "react-router-dom";
import MyShop from "./shop/shop";
import "./App.css";
import PageDetailProduct from "./shop/product/detailproduct/pagedetailproduct";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyShop />} />

        <Route path="/product" element={<MyShop />} />

        <Route
          path="/productDetail/:productId"
          element={<PageDetailProduct />}
        />
        <Route path="/signin" element={<div>Sign in</div>} />
        <Route path="/signup" element={<div>Sign up</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
