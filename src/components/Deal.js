import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../index.css';

const Deal = ({
  title, salePrice, normalPrice, thumb, id,
}) => (
  <div className="deal-container">
    <li className="thumb"><img src={thumb} alt="game" /></li>
    <Link to={`/game/${id}`}><li className="title">{title}</li></Link>
    <li>
      SALE PRICE: $
      {salePrice}
    </li>
    <li>
      REGULAR PRICE: $
      {normalPrice}
    </li>
  </div>
);

Deal.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  salePrice: PropTypes.string.isRequired,
  normalPrice: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Deal;
