import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Testando o componente About', () => {
  it('Teste se a pagina contém as informações sobre a Pokedex', () => {
    const { history } = renderWithRouter(<App />);
    const { location: { pathname } } = history;
    // const about = screen.getByRole('link', { name: /about/i });

    history.push('/about');

    console.log(pathname);

    // expect(screen.getByRole('heading'));
  });
});
