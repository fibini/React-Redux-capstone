import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Games = ({
  title, thumb,
}) => (
  <div className="deal-container">
    <li className="thumb" style={{ backgroundImage: `url(${thumb})` }}>
      HELLO WORLD
    </li>
    <li>{title}</li>
  </div>
);

Games.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default Games;
