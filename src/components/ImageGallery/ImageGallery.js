import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../../components/styles.module.css';

export function ImageGallery({ images }) {
  return (
    <>
      <ul className={css.ImageGallery}>
        {images.map(({ id, ...children }) => (
          <ImageGalleryItem key={id} {...children} />
        ))}
      </ul>
    </>
  );
}
