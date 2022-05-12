import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import pokemons from '../data';
import renderWithRouter from '../renderWithRouter';

describe('Testando componente Pokemon', () => {
  it('Testando a existencia do card', () => {
    renderWithRouter(<App />);
    const pokemonsdata = pokemons;
    const pokeName = screen.getByText(pokemonsdata[0].name);
    const pokeImage = screen.getByAltText(`${pokemonsdata[0].name} sprite`);
    const pokeType = screen.getByTestId('pokemon-type');
    const pokeDetails = screen.getByText('More details');

    expect(pokeName).toBeInTheDocument();
    expect(pokeImage.src).toBe(pokemonsdata[0].image);
    expect(pokeType).toHaveTextContent(pokemonsdata[0].type);
    expect(pokeDetails.href).toContain(`pokemons/${pokemonsdata[0].id}`);
  });
  it('testando a pagina de detalhes', () => {
    renderWithRouter(<App />);
    const pokemonsdata = pokemons;
    const pokeDetails = screen.getByText('More details');
    fireEvent.click(pokeDetails);
    // console.log(history.entries[1].pathname);
    const pokeFav = screen.getByLabelText(/Pokémon favoritado?/i);

    expect(pokeFav).toBeInTheDocument();
    fireEvent.click(pokeFav);
    const pokeStar = screen.getByAltText(`${pokemonsdata[0].name} is marked as favorite`);
    expect(pokeStar).toBeInTheDocument();
    expect(pokeStar.src).toContain('/star-icon.svg');
  });
});
