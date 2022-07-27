import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../index.css';

const Deal = ({
  title, salePrice, normalPrice, thumb, id, steamRating, steamRatingPercent, dealRating,
}) => (
  <div className="deal-page">
    <li className="thumb-deal"><img src={thumb} alt="game" className="img-deal" /></li>
    <Link to={`/game/${id}`}><li className="title">{title}</li></Link>
    <div className="show-deals">
      <li>
        SALE PRICE: $
        {salePrice}
      </li>
      <li>
        REGULAR PRICE: $
        {normalPrice}
      </li>
      <li>
        RATING:
        {' '}
        {steamRating}
        {' '}
        /
        {' '}
        {steamRatingPercent}
        %
      </li>
      <li>
        DEAL RATING:
        {' '}
        {dealRating}
        {' '}
        / 10
      </li>
    </div>
  </div>
);

Deal.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  salePrice: PropTypes.string.isRequired,
  normalPrice: PropTypes.string.isRequired,
  steamRating: PropTypes.string.isRequired,
  steamRatingPercent: PropTypes.string.isRequired,
  dealRating: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Deal;
