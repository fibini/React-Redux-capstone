import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Sale = ({
  title, salePrice, thumb,
}) => (
  <div className="deal-container">
    <li className="thumb" style={{ backgroundImage: `url(${thumb})` }}>
      HELLO WORLD
    </li>
    <li>{title}</li>
    <li>
      $
      {salePrice}
    </li>
  </div>
);

Sale.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  salePrice: PropTypes.string.isRequired,
};

export default Sale;
