import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../index.css';

const Store = ({
  title, images, id,
}) => (
  <div className="deal-container">
    <Link to={`/games/${id}`}><li className="thumb"><img src={`https://www.cheapshark.com${images}`} alt="game" className="store-img" /></li></Link>
    <Link to={`/games/${id}`}><li className="title">{title}</li></Link>
    <li className="store-number">
      STORE NUMBER:
      {id}
    </li>
  </div>
);

Store.propTypes = {
  id: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Store;
