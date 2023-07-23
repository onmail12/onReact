import { X } from "react-bootstrap-icons";

const Modal = ({ isOpen, content, title, closeModalFunction }) => {
  return (
    <dialog className={"modal " + (isOpen ? "open" : "closed")}>
      <div className="col">
        <h2 className="modal-title">{title}</h2>
        <X className="icon" size={32} onClick={() => closeModalFunction()}/>
      </div>

      <div className="modal-content">{content}</div>
    </dialog>
  );
};

export default Modal;
