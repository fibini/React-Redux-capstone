import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '../utils/test-utils';
import Storehome from '../components/pages/Stores';
import App from '../App';

describe(Storehome, () => {
  it('Should have the Nav', () => {
    renderWithProviders(
      <BrowserRouter>
        <Storehome />
      </BrowserRouter>,
    );
    const store = screen.getByText('STORES');

    expect(store).toBeInTheDocument();
  });

  it('Should render details', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const button = await screen.findByText(/Steam/);
    user.click(button);
    const title = await screen.findByText(/Tumblestone/i);
    expect(title).toBeInTheDocument();
  });

  it('Should have the character header.', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Storehome />
      </BrowserRouter>,
    );
    const storeList = await screen.findByText('GameBillet');
    expect(storeList).toBeInTheDocument();
  });

  it('Should have text in search bar', () => {
    renderWithProviders(
      <BrowserRouter>
        <Storehome />
      </BrowserRouter>,
    );
    const searchBar = screen.getByPlaceholderText('Search stores here');
    expect(searchBar).toBeInTheDocument();
  });
  it('Should have text update in search bar', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <Storehome />
      </BrowserRouter>,
    );
    const searchBar = screen.getByPlaceholderText('Search stores here');
    await user.type(searchBar, 'Steam');
    expect(searchBar.value).toBe('Steam');
  });
});
