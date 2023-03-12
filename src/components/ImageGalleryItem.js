import propTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onclick }) => (
  <li class="gallery-item" id={image.id} onClick={onclick}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onclick: propTypes.func.isRequired,
};