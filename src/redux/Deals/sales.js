const salesAPI = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=5';

const GET_SALE = 'redux/Deals/sales/GET_SALES';

function getSales() {
  return async (dispatch) => {
    const response = await fetch(salesAPI);
    const data = await response.json();
    const sales = [];
    data.forEach((sale) => {
      const newSale = {
        title: sale.title,
        gameID: sale.gameID,
        salePrice: sale.salePrice,
        thumb: sale.thumb,
      };
      sales.push(newSale);
    });
    dispatch({
      type: GET_SALE,
      payload: sales,
    });
  };
}

export default function salesReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_SALE:
      return action.payload;
    default:
      return state;
  }
}

export { getSales };
