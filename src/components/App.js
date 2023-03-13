import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import './styles.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const apiKey = '34227355-634b3cfb76d00133b4cb8e037';
    const url = `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          currentPage: prevState.currentPage + 1,
        }));
        if (data.hits.length === 0) {
          alert('No more images found!');
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  openModal = largeImageURL => {
    this.setState({ showModal: true, largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;
    return (
      <div class="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={this.openModal}
            />
          ))}
        </ImageGallery>
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
