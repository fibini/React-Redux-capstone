import { configureStore } from '@reduxjs/toolkit';
import dealsReducer from './Deals/deals';
import storesReducer from './Storepage/storepage';

const store = configureStore({
  reducer: {
    deals: dealsReducer,
    stores: storesReducer,
  },
});

export default store;
