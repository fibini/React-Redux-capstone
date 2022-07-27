const gameAPI = 'https://www.cheapshark.com/api/1.0/deals?id=';

const GET_GAME = 'redux/Details/details/GET_GAME';

function getGame(id) {
  const b = id.replace(/[^a-z0-9]/gi, '%');
  const a = `${gameAPI}${b}`;
  return async (dispatch) => {
    const response = await fetch(a);
    const data = await response.json();
    // console.log(data);
    const games = [];
    games.push(data);
    dispatch({
      type: GET_GAME,
      payload: games,
    });
  };
}

export default function gameReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_GAME:
      return action.payload;
    default:
      return state;
  }
}

export { getGame };
