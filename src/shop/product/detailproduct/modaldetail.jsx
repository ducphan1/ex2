import { Modal } from "antd";
import ComponnentDetai from "./componentdetail";
const ModalDetailProduct = ({ isModalOpen, handleCancel, handleOk, item }) => {
  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1035}
        footer={[]}
      >
        <ComponnentDetai item={item} />
      </Modal>
    </div>
  );
};

export default ModalDetailProduct;
