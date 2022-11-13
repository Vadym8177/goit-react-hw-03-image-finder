import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
// import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import css from '../components/styles.module.css';

export class App extends Component {
  state = {
    imgName: '',
    page: 1,
    img: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.imgName !== this.state.imgName ||
      prevState.page !== this.state.page
    ) {
      fetch(`https://pixabay.com/api/?q=${this.state.imgName}&page=${this.state.page}&key=29444023-fe7d4e5e60b2e765be0bef471&image_type=photo&orientation=horizontal&per_page=12
`)
        .then(r => {
          if (r.ok) {
            return r.json();
          }
          return Promise.reject(new Error('Notjing is found'));
        })
        .then(data =>
          this.setState(prevState => ({
            img: [...prevState.img, ...data.hits],
          }))
        );
    }
  }

  handleFormSubmit = imgName => {
    this.setState({ imgName, page: 1, img: [] });
  };

  nextPage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.img && <ImageGallery images={this.state.img} />}
        {this.state.img.length >= 12 && <Button loadMoreBtn={this.nextPage} />}
      </div>
    );
  }
}
