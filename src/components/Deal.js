import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../index.css';

const Deal = ({
  title, salePrice, normalPrice, thumb, id,
}) => (
  <div className="deal-container">
    <li className="thumb" style={{ backgroundImage: `url(${thumb})` }}>
      HELLO WORLD
    </li>
    <Link to={id}><li>{title}</li></Link>
    <li>
      $
      {salePrice}
    </li>
    <li>
      $
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
