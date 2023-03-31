import { FormPageCard } from 'base/types';
import React from 'react';
import FormCard from '../formCard/formCard';

function FormCardsContainer(props: { cards: FormPageCard[] }) {
  console.log(props.cards);
  return (
    <div className="form-cards-container">
      <h2 className="form-cards-container__title title">Your cards</h2>
      <div className="form-cards-container__cards">
        {props.cards.map((card) => (
          <FormCard {...card} key={card.key} />
        ))}
      </div>
    </div>
  );
}

export default FormCardsContainer;
