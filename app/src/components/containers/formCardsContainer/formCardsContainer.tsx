import { FormPageCard } from 'base/types';
import React from 'react';
import FormCard from '../../cards/formCard/formCard';

function FormCardsContainer({ cards }: { cards: FormPageCard[] }) {
  return (
    <div className="form-cards-container">
      <h2 className="form-cards-container__title title">Your cards</h2>
      <div className="form-cards-container__cards">
        {cards.map((card) => (
          <FormCard {...card} key={card.key} />
        ))}
      </div>
    </div>
  );
}

export default FormCardsContainer;
