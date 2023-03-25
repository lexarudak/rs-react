import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import CardStock from './cardStock';

describe('card stoke', () => {
  test('render card stock = 0', () => {
    render(<CardStock stock={0} />);

    const stockText = screen.getByText(/not in stock/i);
    expect(stockText).toBeInTheDocument();
    expect(stockText.classList).toContain('card__stock_null');
  });

  test('render card stock > 1000', () => {
    render(<CardStock stock={1001} />);

    const stockText = screen.getByText(/more than 1000 in stock/i);
    expect(stockText).toBeInTheDocument();
    expect(stockText.classList).not.toContain('card__stock_null');
  });

  test('render card stock < 0', () => {
    render(<CardStock stock={-1} />);

    const stockText = screen.getByText(/not in stock/i);
    expect(stockText).toBeInTheDocument();
    expect(stockText.classList).toContain('card__stock_null');
  });

  test('render card stock 1000.99 === in stock: 1000', () => {
    render(<CardStock stock={1000.99} />);

    const stockText = screen.getByText('in stock: 1000');
    expect(stockText).toBeInTheDocument();
    expect(stockText.classList).not.toContain('card__stock_null');
  });

  test('render card stock 1.1 === in stock: 1', () => {
    render(<CardStock stock={1.1} />);

    const stockText = screen.getByText('in stock: 1');
    expect(stockText).toBeInTheDocument();
    expect(stockText.classList).not.toContain('card__stock_null');
  });

  test('render card stock 0.99 === 0', () => {
    render(<CardStock stock={0.99} />);

    const stockText = screen.getByText(/not in stock/i);
    expect(stockText).toBeInTheDocument();
    expect(stockText.classList).toContain('card__stock_null');
  });
});
