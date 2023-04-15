import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { FormPageCard } from '../../../base/models';
import { store } from '../../../store';
import formReducer, { createCard } from '../../../store/form/formSlice';
import FormCardsContainer from './formCardsContainer';

describe('form cards container tests', () => {
  const { queryByText } = screen;

  const [firsCard]: FormPageCard[] = [
    {
      id: '1',
      name: 'AAA',
      date: '01-01-2023',
      select: 'cool card',
      checkbox: ['bold', 'italic'],
      radio: 'Yes, of course!',
      imageSrc: '/public/plants/1/1.jpg',
    },
    {
      name: 'card 2',
      date: '01-01-2023',
      select: 'cool card',
      checkbox: ['bold', 'italic'],
      radio: 'Yes, of course!',
      imageSrc: '/public/plants/1/1.jpg',
      id: '1',
    },
  ];

  test('render cards test', () => {
    formReducer(undefined, { type: '' });
    const res = formReducer({ cards: [] }, { type: createCard.type, payload: firsCard });
    render(
      <Provider store={store}>
        <FormCardsContainer />
      </Provider>
    );

    expect(queryByText('AAA')).not.toBeInTheDocument();

    expect(res.cards[0]).toEqual(firsCard);
  });
});
