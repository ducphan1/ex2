import { useState } from "react";
import "./App.css";
import FavoriteIntro from "./component/favorite/favorite";
import Filter from "./component/filter/filter";
import GiftItem from "./component/gift/gift";
import Pagination from "./component/pagination/pagination";
import ProductDisplay from "./component/product/productdisplay/productdisplay";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      {selectedProduct ? (
        <ProductDisplay product={selectedProduct} onBack={handleBack} />
      ) : (
        <>
          <FavoriteIntro />
          <Filter onFilterChange={console.log} />
          <GiftItem onProductClick={handleProductClick} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(8 / 8)}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
