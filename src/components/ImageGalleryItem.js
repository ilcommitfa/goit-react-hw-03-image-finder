const ImageGalleryItem = ({ webformatURL, onImageClick }) => (
  <li className="gallery-item">
    <img src={webformatURL} alt="" onClick={onImageClick} />
  </li>
);

export default ImageGalleryItem;
