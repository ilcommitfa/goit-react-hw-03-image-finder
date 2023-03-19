import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import fetchImages from './api/fetchImages';
import './styles.css';

class App extends Component {
  // Створити стан для масива images, значення query, номера page, показу loader і modal
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
    showModal: false,
    modalImage: null,
  };

  // Створити метод для обробки сабміту форми пошукового запиту
  handleFormSubmit = (query) => {
    // Оновити стан значення query і скинути номер page до 1
    this.setState({ query: query, page: 1 });
    // Викликати метод fetchImages з параметрами query і page=1
    this.fetchImages(query, 1);
  };

  // Створити метод для обробки кліку на кнопку "Load more"
  handleLoadMore = () => {
    // Оновити стан номера page інкрементуючи його на 1
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    // Викликати метод fetchImages з параметрами query і page+1
    this.fetchImages(this.state.query, this.state.page + 1);
  };

  // Створити метод для обробки кліку на картинку
  handleImageClick = (image) => {
    // Оновити стан показу modal і modalImage
    this.setState({ showModal: true, modalImage: image });
  };

  // Створити метод для обробки закриття модального вікна
  handleCloseModal = () => {
    // Оновити стан показу modal і modalImage
    this.setState({ showModal: false, modalImage: null });
  };

  // Створити метод для запуску http-запиту за допомогою функції fetchImages
  fetchImages = (query, page) => {
    // Оновити стан показу loader до true
    this.setState({ isLoading: true });
    // Викликати функцію fetchImages з параметрами query і page і отримати проміс з масивом imagesData
    fetchImages(query, page)
      .then((imagesData) => {
        // Оновити стан масива images додавши до нього новий масив imagesData
        this.setState((prevState) => ({ images: [...prevState.images, ...imagesData] }));
        // Перевірити чи номер page більше ніж 1
        if (page > 1) {
          // Прокрутити екран до кінця списку картинок
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((error) => {
        // Показати повідомлення про помилку у консолі
        console.error(error);
      })
      .finally(() => {
        // Оновити стан показу loader до false
        this.setState({ isLoading: false });
      });
    }
      // Створити метод для рендерингу компонента
  render() {
    
    const { images, isLoading, showModal, modalImage } = this.state;
    
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && (
          <>
            <ImageGallery images={images} onClick={this.handleImageClick} />
            <Button onClick={this.handleLoadMore} />
          </>
        )}
        {isLoading && (
          <Loader />
        )}
        {showModal && (
          <Modal largeImageURL={modalImage.largeImageURL} onClose={this.handleCloseModal} />
        )}
      </div>
    )}
}

export default App;