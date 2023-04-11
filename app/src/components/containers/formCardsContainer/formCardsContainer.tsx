import { FormPageCard } from '../../../base/types';
import React from 'react';
import FormCard from '../../cards/formCard/formCard';
import styles from './formCardsContainer.module.scss';
import InnerBanner from '../../../components/innerBanner/innerBanner';

function FormCardsContainer({ cards }: { cards: FormPageCard[] }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your cards</h2>
      <div className={styles.cards}>
        {cards[0] ? (
          cards.map((card) => <FormCard {...card} key={card.key} />)
        ) : (
          <InnerBanner text="No Cards" />
        )}
      </div>
    </div>
  );
}

export default FormCardsContainer;
