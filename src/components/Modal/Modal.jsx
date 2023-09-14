import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Close, ModalLayer, Overlay } from "./Modal.styled";
import CarDetails from "../CarDetails/CarDetails";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, car }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  });

  const handleEscape = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalLayer>
        <Close onClick={() => onClose()} />
        <CarDetails onClose={onClose} data={car} />
      </ModalLayer>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
