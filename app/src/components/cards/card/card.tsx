import { CardInfo } from 'base/types';
import CardButton from '../../buttons/cardButton/cardButton';
import React from 'react';
import CardImg from '../cardImg/cardImg';
import CardPrice from '../cardPrice/cardPrice';
import CardStock from '../cardStock/cardStock';

function Card({ type, title, description, sale, price, stock, rating, thumbnail }: CardInfo) {
  return (
    <div className="card" data-testid="card">
      <CardImg {...{ sale, rating, thumbnail }} />
      <div className="card__type">{type}</div>
      <div className="card__title">{title}</div>
      <div className="card__text">{description}</div>
      <div className="card__price-and-button">
        <CardPrice sale={sale} price={price} />
        <CardButton stock={stock} />
      </div>
      <CardStock stock={stock} />
    </div>
  );
}

export default Card;
