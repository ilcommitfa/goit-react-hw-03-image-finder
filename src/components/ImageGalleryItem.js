const ImageGalleryItem = ({ webformatURL, onImageClick }) => (
  <li class="gallery-item">
    <img src={webformatURL} alt="" onClick={onImageClick} />
  </li>
);

export default ImageGalleryItem;
