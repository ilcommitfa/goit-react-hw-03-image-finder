import { Component } from 'react';

class Searchbar extends Component {
  // Створити стан для значення інпута
  state = {
    query: "",
  };

  // Створити метод для обробки зміни інпута
  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  // Створити метод для обробки сабміту форми
  handleSubmit = (event) => {
    event.preventDefault();
    // Передати значення інпута у проп onSubmit
    this.props.onSubmit(this.state.query);
    // Очистити значення інпута
    this.setState({ query: "" });
  };

  // Створити метод для рендерингу компонента
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;