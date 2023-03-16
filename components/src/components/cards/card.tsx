import { CardInfo } from 'base/types';
import CardButton from '../../components/buttons/cardButton';
import React from 'react';
import CardImg from './cardImg/cardImg';
import CardPrice from './cardPrice/cardPrice';
import CardStock from './cardStock/cardStock';

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
          <CardPrice sale={this.props.sale} price={this.props.price} />
          <CardButton {...this.props} />
        </div>
        <CardStock stock={this.props.stock} />
      </div>
    );
  }
}

export default Card;
