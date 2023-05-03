import React from 'react';
import styles from './BigCardInfoList.module.scss';
import { BigCardInfoListProps, BIG_CARD_FIELDS, DEFAULT_CHAR_TYPE } from 'models';

const BigCardInfoList = ({
  species,
  type = DEFAULT_CHAR_TYPE,
  gender,
  origin: { name: origin },
  location: { name: location },
}: BigCardInfoListProps) => {
  const [SPECIES, TYPE, GENDER, ORIGIN, LOCATION] = BIG_CARD_FIELDS;
  const listData = [
    [0, SPECIES, species],
    [1, TYPE, type],
    [2, GENDER, gender],
    [3, ORIGIN, origin],
    [4, LOCATION, location],
  ];

  const makeList = () =>
    listData.map(([key, name, prop]) => (
      <p className={styles.item} key={key}>
        <span className={styles.itemName}>{name}</span> {prop}
      </p>
    ));

  return <>{makeList()}</>;
};

export default BigCardInfoList;
