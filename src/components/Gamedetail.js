import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Games = ({
  title, thumb,
}) => (
  <div className="deal-container">
    <li className="thumb"><img src={thumb} alt="game" /></li>
    <li>{title}</li>
  </div>
);

Games.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default Games;
