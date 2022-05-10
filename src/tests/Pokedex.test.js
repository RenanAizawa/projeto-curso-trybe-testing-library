import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderwithRouter from '../renderWithRouter';

describe('Tetando componente Pokedex', () => {
  it('Testando se heading existe na paginda', () => {
    renderwithRouter(<App />);
    const head = screen
      .getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(head).toBeInTheDocument();
  });
  it('Testando existência de todos os buttons', () => {
    renderwithRouter(<App />);
    const tipos = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    tipos
      .map((tipo) => (expect(screen
        .getByRole('button', { name: `${tipo}` })).toBeInTheDocument()));
    fireEvent.click(screen.getByRole('button', { name: /All/i }));
    expect(screen.getByRole('button', { name: /All/i })).toHaveBeenCalled();
    expect(screen.getByRole('button', { name: /Próximo pokémon/i })).toBeInTheDocument();
    expect(screen.getAllByTestId('pokemon-type-button')[0]).toBeInTheDocument();
  });
});
