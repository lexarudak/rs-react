import { CardsContainerProps, Character } from 'base/types';
import React from 'react';
import Card from '../../cards/card/card';

function CardsContainer({ cards, setActiveCard }: CardsContainerProps) {
  return (
    <div className="cards-container">
      {cards.map((character: Character) => (
        <Card character={character} setActiveCard={setActiveCard} key={character.id} />
      ))}
    </div>
  );
}

export default CardsContainer;
