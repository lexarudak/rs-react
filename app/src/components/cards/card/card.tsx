import { CardInfo } from 'base/types';
import CardButton from '../../buttons/cardButton';
import React from 'react';
import CardImg from '../cardImg/cardImg';
import CardPrice from '../cardPrice/cardPrice';
import CardStock from '../cardStock/cardStock';

function Card(props: CardInfo) {
  return (
    <div className="card" data-testid="card">
      <CardImg {...props} />
      <div className="card__type">{props.type}</div>
      <div className="card__title">{props.title}</div>
      <div className="card__text">{props.description}</div>
      <div className="card__price-and-button">
        <CardPrice sale={props.sale} price={props.price} />
        <CardButton {...props} />
      </div>
      <CardStock stock={props.stock} />
    </div>
  );
}

export default Card;
