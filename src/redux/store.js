import { configureStore } from '@reduxjs/toolkit';
import dealsReducer from './Deals/deals';
import salesReducer from './Deals/sales';
import gameReducer from './Details/details';

const store = configureStore({
  reducer: {
    deals: dealsReducer,
    sales: salesReducer,
    games: gameReducer,
  },
});

export default store;
