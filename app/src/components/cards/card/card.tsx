import { CardInfo } from 'base/types';
import React from 'react';

function Card({ image, name, status }: CardInfo) {
  return (
    <div className="card" data-testid="card">
      <img src={image} alt="Card image" className="card__img"></img>
      <div className="card__type">{status}</div>
      <div className="card__title">{name}</div>
    </div>
  );
}

export default Card;
