import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {

  state = {
    isModalOpen: false,
  };

  onToggleModal = () => {
    const { isModalOpen } = this.state;

    this.setState({
      isModalOpen: !isModalOpen,
    });
  };

  render() {
    const { onToggleModal } = this;
    const { webformatURL, largeImageURL } = this.props;
    const { isModalOpen } = this.state;

    return (

        <li className={css.galleryItem} onClick={onToggleModal}>
          <img
            className={css.image}
            src={webformatURL}
            alt=""
          />
          {isModalOpen && (
            <Modal
              largeImageURL={largeImageURL}
              onClose={onToggleModal}
            />
          )}
        </li>


    )
  }
}

ImageGalleryItem.propTypes = {
  onToggleModal: PropTypes.func,
  webformatURL: PropTypes.string.isRequired,
  isModalOpen: PropTypes.func,
  largeImageURL: PropTypes.string.isRequired,
}
