import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getGame } from '../../redux/Details/details';
import Games from '../Gamedetail';
import '../../index.css';

const Game = () => {
  const games = useSelector((state) => state.games);

  const params = useParams();
  // params.id = `${params.id.slice(0, -1)}%3D`;
  // console.log(params.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(`${params.id.slice(0, -1)}%3D`));
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
