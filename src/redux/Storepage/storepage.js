const storesAPI = 'https://www.cheapshark.com/api/1.0/stores';

const GET_STORES = 'redux/Details/details/GET_STORES';

function getStores() {
  return async (dispatch) => {
    const response = await fetch(storesAPI);
    const data = await response.json();
    // console.log(data);
    const stores = [];
    data.forEach((store) => {
      const newStore = {
        id: store.storeID,
        title: store.storeName,
        active: store.isActive,
        images: store.images.banner,
      };
      stores.push(newStore);
      console.log(newStore);
    });
    dispatch({
      type: GET_STORES,
      payload: stores,
    });
    return data;
  };
}

export default function storesReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_STORES:
      return action.payload;
    default:
      return state;
  }
}

export { getStores };
