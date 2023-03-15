import { CardInfo } from 'base/types';
import CardButton from '../../components/buttons/cardButton';
import React from 'react';
import CardImg from './cardImg';
import CardPrice from './cardPrice';
import CardStoke from './cardStoke';

class Card extends React.Component<CardInfo> {
  constructor(props: CardInfo) {
    super(props);
  }

  public render() {
    return (
      <div className="card">
        <CardImg {...this.props} />
        <div className="card__type">{this.props.type}</div>
        <div className="card__title">{this.props.title}</div>
        <div className="card__text">{this.props.description}</div>
        <div className="card__price-and-button">
          <CardPrice {...this.props} />
          <CardButton {...this.props} />
        </div>
        <CardStoke {...this.props} />
      </div>
    );
  }
}

export default Card;
