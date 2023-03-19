import { Component} from 'react';

class Modal extends Component {
  // Створити метод для обробки кліку на кнопку закриття модального вікна
  handleClose = () => {
    // Передати у проп onClose сигнал про закриття модального вікна
    this.props.onClose();
  };

  // Створити метод для обробки кліку на оверлей модального вікна
  handleOverlayClick = (event) => {
    // Перевірити чи клік був на оверлеї а не на контенті
    if (event.target === event.currentTarget) {
      // Передати у проп onClose сигнал про закриття модального вікна
      this.props.onClose();
    }
  };

  // Створити метод для обробки натискання клавіші Escape під час показу модального вікна
  handleKeyDown = (event) => {
    // Перевірити чи натиснута клавіша Escape
    if (event.code === "Escape") {
      // Передати у проп onClose сигнал про закриття модального вікна
      this.props.onClose();
    }
  };
  // Створити метод для додавання і видалення слухача події натискання клавіші під час монтування і розмонтування компонента
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  // Створити метод для рендерингу компонента
  render() {
    // Деструктуризувати проп largeImageURL
    const { largeImageURL } = this.props;
    return (
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          {/* Показати велике зображення */}
          <img src={largeImageURL} alt="" />
          {/* Показати кнопку закриття модального вікна */}
          <button type="button" className="close-button" onClick={this.handleClose}>
            &#10006;
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;