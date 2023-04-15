import '@testing-library/jest-dom';
import { FormPageCard } from '../../base/models';
import formReducer, { createCard, removeCard } from '../../store/form/formSlice';

describe('form slice tests', () => {
  const [firsCard, secondCard]: FormPageCard[] = [
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
      id: '2',
      name: 'card 2',
      date: '01-01-2023',
      select: 'cool card',
      checkbox: ['bold', 'italic'],
      radio: 'Yes, of course!',
      imageSrc: '/public/plants/1/1.jpg',
    },
  ];

  it('init state', () => {
    const res = formReducer(undefined, { type: '' });
    expect(res.cards).toEqual([]);
  });

  it('add firs card state', () => {
    const res = formReducer({ cards: [] }, { type: createCard.type, payload: firsCard });
    expect(res.cards).toEqual([firsCard]);
  });

  it('add second card state', () => {
    const res = formReducer({ cards: [firsCard] }, { type: createCard.type, payload: secondCard });
    expect(res.cards).toEqual([firsCard, secondCard]);
  });

  it('remove first card state', () => {
    const { id } = firsCard;
    const res = formReducer(
      { cards: [firsCard, secondCard] },
      { type: removeCard.type, payload: id }
    );
    expect(res.cards).toEqual([secondCard]);
  });
});
