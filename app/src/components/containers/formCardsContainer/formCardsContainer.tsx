import React from 'react';
import InnerText from '../../../base/enums/innerText';
import InnerBanner from '../../../components/innerBanner/innerBanner';
import { useAppSelector } from '../../../hooks/hooks';
import FormCard from '../../cards/formCard/formCard';
import styles from './formCardsContainer.module.scss';

function FormCardsContainer() {
  const { cards } = useAppSelector((state) => state.form);
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
