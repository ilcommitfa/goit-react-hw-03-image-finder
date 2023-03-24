import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onSelect }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        tags={tags}
        onSelect={() => onSelect(largeImageURL)}
      />
    ))}
  </ul>
);

export default ImageGallery;