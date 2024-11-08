import "./filter.css";
import { SearchOutlined } from "@ant-design/icons";
const Filter = () => {
  return (
    <div className="filter-section">
      <div className="search-bar">
        <i>
          <SearchOutlined />
        </i>
        <input type="text" placeholder="Tìm kiếm" />
      </div>
      <div className="filter-options">
        <select>
          <option value="all">Trạng thái</option>
          <option value="selling">Đang bán</option>
          <option value="out-of-stock">Hết hàng</option>
          <option value="discontinued">Ngưng bán</option>
        </select>
        <select>
          <option value="all">Danh mục</option>
          <option value="wine">Rượu</option>
          <option value="nuts">Hạt</option>
          <option value="fruits">Hoa quả</option>
        </select>
        <select>
          <option value="recent">Đã thêm: Gần đây (mới nhất)</option>
          <option value="oldest">Cũ nhất</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
