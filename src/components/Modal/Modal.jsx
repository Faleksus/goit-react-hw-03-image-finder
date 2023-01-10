import propTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';


export class Modal extends Component {



  handleBackdrop = e => {
    const { onClose } = this.props;
    if (e.target === e.currentTarget) onClose();
  };

  handleKeyDown = e => {
    const { onClose } = this.props;
    if (e.key === 'Escape') onClose();
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
          <img src={largeImageURL} alt="" />
        </div>
      </div>,
      document.querySelector('#portal')
    );
  }
}

Modal.propTypes = {
  handleBackdrop: propTypes.func.isRequired,
  largeImageURL: propTypes.string.isRequired,
};
