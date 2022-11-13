import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import css from '../../components/styles.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img
            src={this.props.webformatURL}
            alt={this.props.tags}
            className={css.ImageGalleryItemImage}
            onClick={this.toggleModal}
          />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} image={this.props.largeImageURL} />
        )}
      </>
    );
  }
}
