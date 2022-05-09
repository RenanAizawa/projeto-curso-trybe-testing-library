import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente About', () => {
  it('Teste se a pagina contém as informações sobre a Pokedex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    // const about = screen.getByRole('link', { name: /about/i });
    const image = screen.getByAltText('Pokédex');
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(screen.getByRole('heading', { name: /About Pokédex/i, level: 2 }))
      .toBeInTheDocument();
    expect(image.src).toBe(url);
  });
});
