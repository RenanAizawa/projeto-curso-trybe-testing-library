import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente About', () => {
  it('Teste se a pagina contém as informações sobre a Pokedex', () => {
    const { history } = renderWithRouter(<App />);
    // const about = screen.getByRole('link', { name: /about/i });

    history.push('/about');

    expect(screen.getByRole('heading', { name: /About Pokédex/i, level: 2 }))
      .toBeInTheDocument();
  });
});
