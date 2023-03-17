import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import CardImg from './cardImg';
const testObj1 = {
  id: 1,
  title: '',
  description: '',
  price: 15,
  sale: 0,
  rating: 5.01,
  stock: 0,
  type: '',
  thumbnail: '',
};
const testObj2 = {
  id: 1,
  title: '',
  description: '',
  price: 15,
  sale: 99,
  rating: -1,
  stock: 0,
  type: '',
  thumbnail: '',
};
const testObj3 = {
  id: 1,
  title: '',
  description: '',
  price: 15,
  sale: 99.1,
  rating: 0.1,
  stock: 0,
  type: '',
  thumbnail: '',
};
describe('card img sale testing', () => {
  test('sale === 0', () => {
    render(React.createElement(CardImg, { ...testObj1 }));
    const sale = screen.queryByText('0');
    expect(sale).not.toBeInTheDocument();
  });
  test('sale === 99', () => {
    render(React.createElement(CardImg, { ...testObj2 }));
    const sale = screen.getByText('99');
    expect(sale).toBeInTheDocument();
  });
  test('sale === 99.1', () => {
    render(React.createElement(CardImg, { ...testObj3 }));
    const sale = screen.queryByText(/99/i);
    expect(sale).not.toBeInTheDocument();
  });
});
describe('card img rating testing', () => {
  test('rating === 5.01', () => {
    render(React.createElement(CardImg, { ...testObj1 }));
    const rating = screen.queryByText(/5/i);
    expect(rating).not.toBeInTheDocument();
  });
  test('rating === -1', () => {
    render(React.createElement(CardImg, { ...testObj2 }));
    const rating = screen.getByText('0.0');
    expect(rating).toBeInTheDocument();
  });
  test('rating === 0.1', () => {
    render(React.createElement(CardImg, { ...testObj3 }));
    const rating = screen.getByText(/0.1/i);
    expect(rating).toBeInTheDocument();
  });
});
