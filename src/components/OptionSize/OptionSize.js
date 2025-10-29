import PropTypes from 'prop-types';
import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  const getSizeButtonClass = (sizeName) => clsx(
    sizeName === currentSize && styles.active
  );

  return (
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
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired
    })
  ).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired
};

export default OptionSize;