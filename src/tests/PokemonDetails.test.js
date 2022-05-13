import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import pokemons from '../data';
import renderWithRouter from '../renderWithRouter';

describe('Testando componente PokemonDetails', () => {
  it('testando existencia de informações', () => {
    renderWithRouter(<App />);
    const pokeMock01 = pokemons[0];
    console.log(pokeMock01);
    fireEvent.click(screen.getByText('More details'));

    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText(`Game Locations of ${pokeMock01.name}`)).toBeInTheDocument();
    expect(screen.getByText(pokeMock01.summary)).toBeInTheDocument();
    expect(screen.getByLabelText('Pokémon favoritado?')).toBeInTheDocument();
    expect(screen
      .getByRole('heading', { name: `${pokeMock01.name} Details`, level: 2 }))
      .toBeInTheDocument();
  });
  it('testando imagens do PokemonDetails', () => {
    renderWithRouter(<App />);
    const pokeMock01 = pokemons[0];
    // console.log(pokeMock01);
    fireEvent.click(screen.getByText('More details'));

    const image01 = screen.getAllByAltText(`${pokeMock01.name} location`)[0];
    const image02 = screen.getAllByAltText(`${pokeMock01.name} location`)[1];

    expect(image01).toBeInTheDocument();
    expect(image01.src).toBe(pokeMock01.foundAt[0].map);
    expect(image02).toBeInTheDocument();
    expect(image02.src).toBe(pokeMock01.foundAt[1].map);
  });
});
