import { useAppSelector } from '../../../hooks/hooks';
import React from 'react';
import InnerBanner from '../../../components/innerBanner/innerBanner';
import FormCard from '../../cards/formCard/formCard';
import styles from './formCardsContainer.module.scss';
import InnerText from '../../../base/enums/innerText';
import SliceNames from '../../../base/enums/sliceNames';

function FormCardsContainer() {
  const { cards } = useAppSelector((state) => state[SliceNames.form]);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your cards</h2>
      <div className={styles.cards}>
        {cards[0] ? (
          cards.map((card) => <FormCard {...card} key={card.id} />)
        ) : (
          <InnerBanner text={InnerText.noCards} />
        )}
      </div>
    </div>
  );
}

export default FormCardsContainer;
