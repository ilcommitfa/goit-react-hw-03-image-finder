import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";

class App extends Component {
  state = {
    query: "",
    images: [],
    selectedImage: null
  };

  handleSearch = (query) => {
    const apiKey = "34227355-634b3cfb76d00133b4cb8e037";
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}`;
  
    axios.get(url)
      .then((response) => {
        const images = response.data.hits;
        this.setState({ images });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  };

  render() {
    const { query, images, selectedImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />

        <ImageGallery
          images={images}
          onImageClick={this.handleImageClick}
        />

        {selectedImage && (
          <div>
            <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
