import TestId from '../../../base/enums/testId';
import { CardInfo } from 'base/types';
import React from 'react';
import styles from './card.module.scss';

function Card({ character, setActiveCard }: CardInfo) {
  return (
    <div
      className={styles.card}
      data-testid={TestId.mainCard}
      onClick={() => setActiveCard(character)}
    >
      <img src={character.image} alt="Card image" className={styles.img}></img>
      <div className={styles.type}>{character.status}</div>
      <div className={styles.title}>{character.name}</div>
    </div>
  );
}

export default Card;
