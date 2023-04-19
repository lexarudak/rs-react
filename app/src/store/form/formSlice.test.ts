import '@testing-library/jest-dom';
import { FormPageCard, FORM_CARDS } from 'models';
import { createCard, removeCard, formReducer } from '../../store/form/formSlice';

describe('form slice tests', () => {
  const [FIRST_CARD, SECOND_CARD]: FormPageCard[] = FORM_CARDS;

  it('init state', () => {
    const res = formReducer(undefined, { type: '' });
    expect(res.cards).toEqual([]);
  });

  it('add firs card state', () => {
    const res = formReducer({ cards: [] }, { type: createCard.type, payload: FIRST_CARD });
    expect(res.cards).toEqual([FIRST_CARD]);
  });

  it('add second card state', () => {
    const res = formReducer(
      { cards: [FIRST_CARD] },
      { type: createCard.type, payload: SECOND_CARD }
    );
    expect(res.cards).toEqual([FIRST_CARD, SECOND_CARD]);
  });

  it('remove first card state', () => {
    const { id } = FIRST_CARD;
    const res = formReducer(
      { cards: [FIRST_CARD, SECOND_CARD] },
      { type: removeCard.type, payload: id }
    );
    expect(res.cards).toEqual([SECOND_CARD]);
  });
});
