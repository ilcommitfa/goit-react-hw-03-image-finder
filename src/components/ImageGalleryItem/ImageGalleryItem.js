const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onClick }) => {
  // Створити метод для обробки кліку на картинку
  const handleClick = () => {
    // Передати у проп onClick дані про картинку
    onClick({ id, largeImageURL });
  };

  return (
    <li className="ImageGalleryItem" key={id}>
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" onClick={handleClick} />
    </li>
  );
};

export default ImageGalleryItem;