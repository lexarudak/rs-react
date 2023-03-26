import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormPageCard } from 'base/types';
import React from 'react';
import FormCardsContainer from './formCardsContainer';

describe('form cards container tests', () => {
  const props: FormPageCard[] = [
    {
      name: 'card',
      date: '01-01-2023',
      type: 'cool card',
      titleStyle: ['bold', 'italic'],
      border: 'Yes, of course!',
      image: '/public/plants/1/1.jpg',
      key: 1,
    },
    {
      name: 'card 2',
      date: '01-01-2023',
      type: 'cool card',
      titleStyle: ['bold', 'italic'],
      border: 'Yes, of course!',
      image: '/public/plants/1/1.jpg',
      key: 2,
    },
  ];

  test('render cards test', () => {
    render(<FormCardsContainer cards={props} />);

    const card = screen.getByText('card');
    expect(card).toBeInTheDocument();
    const card2 = screen.getByText('card 2');
    expect(card2).toBeInTheDocument();
  });
});
