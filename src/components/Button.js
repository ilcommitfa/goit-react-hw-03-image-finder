const Button = ({ onClick }) => (
  <button type="button" className="button" onClick={onClick}>
    <span className="button-label">Load more</span>
  </button>
);

export default Button;
