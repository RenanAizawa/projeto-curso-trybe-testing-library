import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando componente FavoritePokemons', () => {
  it('Teste h2 esta no documento', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');
    const text = 'No favorite pokemon found';
    const noFavorite = screen.getByText(text);

    expect(noFavorite).toBeInTheDocument();
  });
});
