import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, onOpenModal }) => (
  <ul className="gallery">
    {images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} onOpenModal={onOpenModal} />
    ))}
  </ul>
);

export default ImageGallery;
