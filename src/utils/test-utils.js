import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import storesReducer from '../redux/Storepage/storepage';
import dealsReducer from '../redux/Deals/deals';

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { stores: storesReducer, deals: dealsReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;
