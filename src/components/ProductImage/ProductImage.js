import PropTypes from 'prop-types';
import styles from '../Product/Product.module.scss';

const ProductImage = ({ name, title, currentColor }) => {
    /* show image*/
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={`${title} - ${currentColor}`}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
      />
    </div>
  );
};

ProductImage.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired
};

export default ProductImage;