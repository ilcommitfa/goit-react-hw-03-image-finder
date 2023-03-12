import propTypes from 'prop-types';

export const Modal = ({ src, alt, handleClose }) => (
  <div class="overlay" onClick={handleClose}>
    <div class="modal">
      <img src={src} alt={alt} />
    </div>
  </div>
);

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};