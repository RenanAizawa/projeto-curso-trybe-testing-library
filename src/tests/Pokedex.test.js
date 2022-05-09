import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderwithRouter from '../renderWithRouter';

describe('Tetando componente Pokedex', () => {
  it('Tetando se heading existe na paginda', () => {
    renderwithRouter(<App />);
    const head = screen
      .getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(head).toBeInTheDocument();
  });
  it('');
});
