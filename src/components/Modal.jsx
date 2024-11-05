import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children, isFactSheet }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div
        className={`modal-content ${
          isFactSheet ? "fact-sheet-modal" : "contact-modal"
        }`}
      >
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
