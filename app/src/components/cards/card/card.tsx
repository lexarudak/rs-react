import TestId from '../../../base/enums/testId';
import { CardInfo } from 'base/types';
import React from 'react';
import styles from './card.module.scss';
import Api from '../../../api/api';

function Card({ character: { status, name, image, id }, setActiveCard, setIsPopupShow }: CardInfo) {
  return (
    <div
      className={styles.card}
      data-testid={TestId.mainCard}
      onClick={async () => {
        setActiveCard(undefined);
        setIsPopupShow(true);
        setActiveCard(await Api.getCharacterById(id));
      }}
    >
      <img src={image} alt="Card image" className={styles.img}></img>
      <div className={styles.type}>{status}</div>
      <div className={styles.title}>{name}</div>
    </div>
  );
}

export default Card;
