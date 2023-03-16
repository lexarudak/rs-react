import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import CardPrice from './cardPrice';

const makePrice = (price: number, sale: number) => render(<CardPrice sale={sale} price={price} />);

describe('render price without sale', () => {
  test('', () => {
    makePrice(0, 0);

    const price = screen.getByText('-');
    expect(price).toBeInTheDocument();
  });
});
