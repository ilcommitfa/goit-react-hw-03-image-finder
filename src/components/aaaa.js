import { Component } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal";

class App extends Component {
  state = {
    query: "",
    images: [],
    selectedImage: null,
    page: 1,
  };

  handleSearch = (query) => {
    const apiKey = "34227355-634b3cfb76d00133b4cb8e037";
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&page=${this.state.page}&per_page=12`;

    axios
      .get(url)
      .then((response) => {
        const images = response.data.hits;
        this.setState({ query, images, page: 1 });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  handleLoadMore = () => {
    const apiKey = "34227355-634b3cfb76d00133b4cb8e037";
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
      this.state.query
    )}&page=${this.state.page + 1}&per_page=12`;

    axios
      .get(url)
      .then((response) => {
        const newImages = response.data.hits;
        this.setState((prevState) => ({
          images: [...prevState.images, ...newImages],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { images, selectedImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />

        <ImageGallery images={images} onImageClick={this.handleImageClick} />

        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            onCloseModal={this.handleCloseModal}
          />
        )}

        {images.length > 0 && (
          <button onClick={this.handleLoadMore}>Load More</button>
        )}
      </div>
    );
  }
}

export default App;
