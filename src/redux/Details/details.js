// const gameAPI = 'https://www.cheapshark.com/api/1.0/games?id=';

// const GET_GAME = 'redux/Details/details/GET_GAME';

// function getSales() {
//   return async (dispatch) => {
//     const response = await fetch(gameAPI);
//     const data = await response.json();
//     const sales = [];
//     data.forEach((sale) => {
//       const newSale = {
//         title: sale.title,
//         gameID: sale.gameID,
//         salePrice: sale.salePrice,
//         thumb: sale.thumb,
//       };
//       sales.push(newSale);
//     });
//     dispatch({
//       type: GET_GAME,
//       payload: sales,
//     });
//   };
// }

// export default function gameReducer(state = [], action = {}) {
//   switch (action.type) {
//     case GET_GAME:
//       return action.payload;
//     default:
//       return state;
//   }
// }
