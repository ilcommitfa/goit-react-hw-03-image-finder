const ImageGalleryItem = ({ image, onOpenModal }) => (
  <li className="gallery-item">
    <img
      src={image.webformatURL}
      alt={image.tags}
      className="gallery-item__image"
      onClick={() => onOpenModal(image)}
    />
  </li>
);

export default ImageGalleryItem;
