import propTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';


export class Modal extends Component {

  handleBackdrop = event => {
    // Щоб не було всплиття подій далі і відкривалась модалка.
    // Можна замість цього, в ImageGalleryItem dвинести модалку з Li-шки
    event.stopPropagation();
    const { onClose } = this.props;
    if (event.currentTarget === event.target) onClose();
  };

  handleKeyDown = event => {
    const { onClose } = this.props;
    if (event.key === 'Escape') onClose();
  };

  componentDidMount() {
    const { handleKeyDown } = this;
    window.addEventListener('keydown', handleKeyDown);
  }

  componentWillUnmount() {
    const { handleKeyDown } = this;
    window.removeEventListener('keydown', handleKeyDown);
  }

  render() {
    const { handleBackdrop } = this;
    const { largeImageURL } = this.props;

    return createPortal(
      <div className={css.overlay} onClick={handleBackdrop}>
        <div className={css.modal}>
          <img src={largeImageURL} alt=""/>
        </div>
      </div>,
      document.querySelector('#portal')
    );
  }
}

Modal.propTypes = {
  handleBackdrop: propTypes.func,
  largeImageURL: propTypes.string.isRequired,
};
