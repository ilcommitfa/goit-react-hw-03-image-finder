import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
  render() {
    // Деструктуризувати проп images
    const { images } = this.props;
    return (
      <ul className="ImageGallery">
        {/* Перебрати масив images і створити компонент <ImageGalleryItem> для кожного об'єкта */}
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            onClick={this.props.onClick}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
