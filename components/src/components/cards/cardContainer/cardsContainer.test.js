import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import CardsContainer from './cardsContainer';
import plants from '../../../data/plants.json';
describe('Card container tests', () => {
  test('Exist find first element by title', () => {
    const name = plants.products[0].title;
    render(React.createElement(CardsContainer, { searchValue: name.slice(0, 1) }));
    const card = screen.getByText(name);
    expect(card).toBeInTheDocument();
  });
  test('Empty search', () => {
    render(React.createElement(CardsContainer, { searchValue: '' }));
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(plants.products.length);
  });
});
