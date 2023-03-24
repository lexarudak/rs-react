import { FormPageCard } from 'base/types';
import React from 'react';

class FormCardsContainer extends React.Component<{ cards: FormPageCard[] }> {
  constructor(props: { cards: FormPageCard[] }) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="form-cards-container">
        <h2 className="title">Your cards</h2>
        <div>{this.props.cards.toString()}</div>
      </div>
    );
  }
}

export default FormCardsContainer;
