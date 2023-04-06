import { CardInfo } from 'base/types';
import React from 'react';

function Card({ character, setActiveCard }: CardInfo) {
  return (
    <div className="card" data-testid="card" onClick={() => setActiveCard(character)}>
      <img src={character.image} alt="Card image" className="card__img"></img>
      <div className="card__type">{character.status}</div>
      <div className="card__title">{character.name}</div>
    </div>
  );
}

export default Card;
