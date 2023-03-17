import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Card from './card';
const testObj = {
    id: 1,
    title: 'Echeveria SC-092',
    description: 'Succulent plants are drought-resistant plants in which the leaves, stem, or roots have become more than usually fleshy by the development of water-storing tissue.',
    price: 15,
    sale: 10,
    rating: 5,
    stock: 0,
    type: 'Succulent',
    thumbnail: 'url(src/data/plants/1/1.jpg)',
};
describe('card', () => {
    test('render card text', () => {
        render(React.createElement(Card, { ...testObj }));
        const type = screen.getByText('Succulent');
        const title = screen.getByText(/Echeveria SC-092/i);
        const description = screen.getByText('Succulent plants are drought-resistant plants in which the leaves, stem, or roots have become more than usually fleshy by the development of water-storing tissue.');
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(type).toBeInTheDocument();
        expect(title.classList).toContain('card__title');
        expect(description.classList).toContain('card__text');
        expect(type.classList).toContain('card__type');
    });
});
