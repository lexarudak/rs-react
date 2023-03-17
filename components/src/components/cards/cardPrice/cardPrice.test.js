import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import CardPrice from './cardPrice';
const makePrice = (price, sale) => render(React.createElement(CardPrice, { sale: sale, price: price }));
describe('render price without sale', () => {
    test('render price without sale === 0', () => {
        makePrice(0, 0);
        const price = screen.getByText('-');
        expect(price).toBeInTheDocument();
    });
    test('render price without sale === -1', () => {
        makePrice(-1, 0);
        const price = screen.getByText('-');
        expect(price).toBeInTheDocument();
    });
    test('render price without sale === 10000', () => {
        makePrice(10000, 0);
        const price = screen.getByText('-');
        expect(price).toBeInTheDocument();
    });
    test('render price without sale === 9999.99', () => {
        makePrice(9999.99, 0);
        const price = screen.getByText('9999');
        const cents = screen.getByText('.99');
        expect(price).toBeInTheDocument();
        expect(cents).toBeInTheDocument();
    });
    test('render price without sale === 0.01', () => {
        makePrice(0.01, 0);
        const price = screen.getByText('0');
        const cents = screen.getByText('.01');
        expect(price).toBeInTheDocument();
        expect(cents).toBeInTheDocument();
    });
});
