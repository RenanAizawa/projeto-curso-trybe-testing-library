import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste do componente NotFound', () => {
  it('Testando existencia do heading', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/1234');

    const heading = screen
      .getByRole('heading', { name: /Page requested not found/i, level: 2 });
    const image = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    expect(heading).toBeInTheDocument();
    expect(image.src).toBe(url);
  });
});
