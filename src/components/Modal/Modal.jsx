import propTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';


export class Modal extends Component {

  handleBackdrop = event => {
    // const { onClose } = this.props;
    console.log('Клик по таргету:', event.target);
    console.log('Клик по каренттаргету:', event.currentTarget);

    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
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
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="" onClick={handleBackdrop} />
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
