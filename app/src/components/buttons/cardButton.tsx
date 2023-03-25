import { CardInfo } from 'base/types';
import React from 'react';

class CardButton extends React.Component<CardInfo> {
  constructor(props: CardInfo) {
    super(props);
  }

  public render() {
    return (
      <button className="card-button" disabled={this.props.stock <= 0}>
        To card
      </button>
    );
  }
}

export default CardButton;
