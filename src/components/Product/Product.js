import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = ({ name, title, basePrice, colors, sizes }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getColorButtonClass = (color) => clsx(
    styles['color' + color[0].toUpperCase() + color.slice(1).toLowerCase()],
    color === currentColor && styles.active
  );

  const getSizeButtonClass = (sizeName) => clsx(
    sizeName === currentSize && styles.active
  );

  // Funkcja do obliczenia aktualnej ceny w zależności od wybranego rozmiaru
  const getPrice = () => {
    const selectedSize = sizes.find(size => size.name === currentSize);
    return basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
  }

  const handleAddToCart = (event) => {
    event.preventDefault(); // blokuje domyślne odświeżenie strony
    console.log('Product summary:');
    console.log('Name:', title);
    console.log('Price:', getPrice());
    console.log('Color:', currentColor);
    console.log('Size:', currentSize);
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={`${title} - ${currentColor}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleAddToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
               {sizes.map(size => (
                <li key={size.name}>
                  <button
                    type="button"
                    className={getSizeButtonClass(size.name)}
                    onClick={() => setCurrentSize(size.name)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => (
                <li key={color}>
                  <button
                    type="button"
                    className={getColorButtonClass(color)}
                    onClick={() => setCurrentColor(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

// PropTypes – określamy wymagane propsy i ich typy
Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Product;