import { CardsContainerProps, Character } from 'base/models';
import React from 'react';
import Card from '../../cards/card/card';
import style from './cardsContainer.module.scss';

function CardsContainer({ cards, fetchCharacterById, setIsPopupShow }: CardsContainerProps) {
  return (
    <div className={style.container}>
      {cards.map((character: Character) => (
        <Card
          character={character}
          fetchCharacterById={fetchCharacterById}
          setIsPopupShow={setIsPopupShow}
          key={character.id}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
