import propTypes from 'prop-types';

export const Button = ({ onClick }) => (
  <button class="button" onClick={onClick} type="button">
    Load more
  </button>
);

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};