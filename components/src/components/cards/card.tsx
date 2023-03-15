import { CardInfo } from 'base/types';
import CardButton from '../../components/buttons/cardButton';
import React from 'react';
import CardImg from './cardImg';

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
          <p className="card__price">$2000</p>
          <CardButton {...this.props} />
        </div>
        <div className="card__stoke">in stoke: 36</div>
      </div>
    );
  }
}

export default Card;
