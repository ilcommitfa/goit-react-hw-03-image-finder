import { Component} from 'react';

class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };
  
  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {

    const { largeImageURL } = this.props;
    
  return (
    <div className="Overlay" onClick={this.handleOverlayClick}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
    );
  }
};

export default Modal;