const gameAPI = 'https://www.cheapshark.com/api/1.0/deals?id=dJNCeHkZV3iaXZQFBSpYh3B2tz6ZuMvBaFpI6d1QYiU%3D';

const GET_GAME = 'redux/Details/details/GET_GAME';

function getGame() {
  return async (dispatch) => {
    const response = await fetch(gameAPI);
    const data = await response.json();
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
