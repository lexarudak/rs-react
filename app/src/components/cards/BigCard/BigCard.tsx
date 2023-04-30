import React from 'react';
import { BigCardInfoList } from 'components';
import { Character } from 'models';
import styles from './BigCard.module.scss';

const BigCard = ({ image, name, species, status, type, gender, origin, location }: Character) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt={name}></img>
      <div className={styles.info}>
        <p className={styles.title}>{name}</p>
        <p className={styles.status}>{status}</p>
        {<BigCardInfoList {...{ species, type, gender, origin, location }} />}
      </div>
    </div>
  );
};

export default BigCard;
