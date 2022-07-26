import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getGame } from '../../redux/Details/details';
import Games from '../Gamedetail';
import '../../index.css';

const Game = () => {
  const games = useSelector((state) => state.games);
  console.log(games);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame());
  }, []);

  return (
    <div>
      <ul className="deals-list">
        {games.map((game) => (
          <Games
            key={uuidv4()}
            title={game.gameInfo.name}
            thumb={game.gameInfo.thumb}
          />
        ))}
      </ul>
    </div>
  );
};

export default Game;
