const ImageGalleryItem = ({ webformatURL, tags, onSelect }) => (
  <li className="ImageGalleryItem" onClick={onSelect}>
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;