import { Component } from "react";

class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
  }

  handleEsc = e => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="overlay" onClick={this.handleOverlayClick}>
        <div className="modal">
          <img src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;