import { Character } from 'base/types';
import React from 'react';
import Card from '../cards/card/card';

function CardsContainer({ cards }: { cards: Character[] }) {
  return (
    <div className="cards-container">
      {cards.map(({ id, name, image, status }: Character) => (
        <Card image={image} name={name} status={status} key={id} />
      ))}
    </div>
  );
}

export default CardsContainer;
