import { FormPageCard } from 'base/types';
import React from 'react';
import FormCard from '../formCard/formCard';

class FormCardsContainer extends React.Component<{ cards: FormPageCard[] }> {
  constructor(props: { cards: FormPageCard[] }) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="form-cards-container">
        <h2 className="form-cards-container__title title">Your cards</h2>
        <div className="form-cards-container__cards">
          {this.props.cards.map((card) => (
            <FormCard {...card} key={card.key} />
          ))}
        </div>
      </div>
    );
  }
}

export default FormCardsContainer;
