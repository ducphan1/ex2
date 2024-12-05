import React from "react";
import { Pagination } from "antd";
const Paging = ({ page, pageSize, total, onPageChange }) => {
  return (
    <div className="paging">
      <Pagination
        // defaultCurrent={1}
        pageSize={pageSize}
        current={page}
        total={total}
        onChange={onPageChange}
      />
    </div>
  );
};

export default Paging;
