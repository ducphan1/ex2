import React from "react";
import "./pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i <= 4 ||
        i === totalPages ||
        i === currentPage - 1 ||
        i === currentPage + 1
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            disabled={i === currentPage}
          >
            {i}
          </button>
        );
      } else if (i === 5 && totalPages > 5) {
        pages.push(<span key="dots">...</span>);
      }
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
