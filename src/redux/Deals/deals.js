const dealsAPI = 'https://www.cheapshark.com/api/1.0/deals?storeID=1';

const GET_DEALS = 'redux/Deals/deals/GET_DEALS';

function getDeals() {
  return async (dispatch) => {
    const response = await fetch(dealsAPI);
    const data = await response.json();
    const deals = [];
    data.forEach((deal) => {
      const newDeal = {
        id: deal.dealID,
        title: deal.title,
        gameID: deal.gameID,
        salePrice: deal.salePrice,
        normalPrice: deal.normalPrice,
        dealID: deal.dealID,
        thumb: deal.thumb,
      };
      deals.push(newDeal);
    });
    dispatch({
      type: GET_DEALS,
      payload: deals,
    });
  };
}

export default function dealsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_DEALS:
      return action.payload;
    default:
      return state;
  }
}

export { getDeals };
