import React from 'react';
import { TestId, CardProps } from 'models';
import styles from './MainCard.module.scss';

const MainCard = ({
  character: { status, name, image, id },
  fetchCharacterById,
  setIsPopupShow,
}: CardProps) => {
  const onClickHandler = () => {
    setIsPopupShow(true);
    fetchCharacterById(id);
  };

  return (
    <div className={styles.card} data-testid={TestId.mainCard} onClick={() => onClickHandler()}>
      <img src={image} alt={name} className={styles.img}></img>
      <div className={styles.type}>{status}</div>
      <div className={styles.title}>{name}</div>
    </div>
  );
};

export default MainCard;
