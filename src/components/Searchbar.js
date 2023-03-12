import propTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => (
  <header class="searchbar">
    <form class="SearchForm" onSubmit={onSubmit}>
      <button type="submit" class="button">
        <span class="button-label">Search</span>
      </button>

      <input
        name="inputForSearch"
        class="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};