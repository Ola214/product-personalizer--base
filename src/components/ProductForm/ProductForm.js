import PropTypes from 'prop-types';
import styles from '../Product/Product.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = ({
  name,
  title,
  price,
  colors,
  sizes,
  currentColor,
  currentSize,
  setCurrentColor,
  setCurrentSize
}) => {

  const handleAddToCart = (event) => {
    event.preventDefault();
    console.log('Product summary:');
    console.log('Name:', title);
    console.log('Price:', price);
    console.log('Color:', currentColor);
    console.log('Size:', currentSize);
  };

  return (
    <form onSubmit={handleAddToCart}>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired
    })
  ).isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired
};

export default ProductForm;