import TestId from '../../../base/enums/testId';
import { CardProps } from 'base/models';
import React from 'react';
import styles from './card.module.scss';

function Card({
  character: { status, name, image, id },
  fetchCharacterById,
  setIsPopupShow,
}: CardProps) {
  return (
    <div
      className={styles.card}
      data-testid={TestId.mainCard}
      onClick={() => {
        setIsPopupShow(true);
        fetchCharacterById(id);
      }}
    >
      <img src={image} alt={name} className={styles.img}></img>
      <div className={styles.type}>{status}</div>
      <div className={styles.title}>{name}</div>
    </div>
  );
}

export default Card;
