import React from 'react';
import { InnerBanner, FormCard } from 'components';
import { useAppSelector } from 'hooks';
import { formSelector } from 'store';
import { InnerText } from 'models';
import styles from './formCardsContainer.module.scss';

const FormCardsContainer = () => {
  const { cards } = useAppSelector(formSelector);

  const fillContainer = () => cards.map((card) => <FormCard {...card} key={card.id} />);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your cards</h2>
      <div className={styles.cards}>
        {cards.length ? fillContainer() : <InnerBanner text={InnerText.noCards} />}
      </div>
    </div>
  );
};

export default FormCardsContainer;
