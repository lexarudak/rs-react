import { Character } from 'base/types';
import React from 'react';

import styles from './bigCard.module.scss';

function BigCard({
  image,
  name,
  species,
  status,
  type,
  gender,
  origin: { name: origin },
  location: { name: location },
}: Character) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt="Card image"></img>
      <div className={styles.info}>
        <p className={styles.title}>{name}</p>
        <p className={styles.status}>{status}</p>
        {[
          [0, 'Species', species],
          [1, 'Type', type || 'Regular'],
          [2, 'Gender', gender],
          [3, 'Origin', origin],
          [4, 'Location', location],
        ].map(([key, name, prop]) => (
          <p className={styles.prop} key={key}>
            <span className={styles.propName}>{name}</span> {prop}
          </p>
        ))}
      </div>
    </div>
  );
}

export default BigCard;
