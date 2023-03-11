import React from "react";

const Modal = ({ selectedImage, onCloseModal }) => (
  <div className="overlay" onClick={onCloseModal}>
    <div className="modal">
      <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
    </div>
  </div>
);

export default Modal;