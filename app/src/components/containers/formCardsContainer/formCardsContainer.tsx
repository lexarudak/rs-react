import { FormPageCard } from 'base/models';
import { useAppSelector } from '../../../hooks/hooks';
import React from 'react';
import InnerBanner from '../../../components/innerBanner/innerBanner';
import FormCard from '../../cards/formCard/formCard';
import styles from './formCardsContainer.module.scss';

function FormCardsContainer() {
  const cards: FormPageCard[] = useAppSelector((state) => state.form.formList);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your cards</h2>
      <div className={styles.cards}>
        {cards[0] ? (
          cards.map((card) => <FormCard {...card} key={card.id} />)
        ) : (
          <InnerBanner text="No Cards" />
        )}
      </div>
    </div>
  );
}

export default FormCardsContainer;
