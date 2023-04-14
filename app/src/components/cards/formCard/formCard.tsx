import TestId from '../../../base/enums/testId';
import { FormPageCard } from 'base/models';
import React from 'react';
import { radioConfig } from '../../forms/appForm/appFormConfig';
import styles from './formCard.module.scss';
import { useAppDispatch } from '../../../hooks/hooks';
import { removeCard } from '../../../store/form/formSlice';

function FormCard({ name, date, select, checkbox, radio, imageSrc, id }: FormPageCard) {
  const dispatch = useAppDispatch();

  function isBorder(textValue: string | null) {
    const [trueValue] = radioConfig.valuesArr;
    const { text } = trueValue;
    return text === textValue;
  }

  function getTitleStyles(initStyle: string, checkbox: false | string[]) {
    return checkbox
      ? checkbox
          .reduce(
            (acc, style) => [...acc, styles[style.replace(/ /gi, '-').toLowerCase()]],
            [initStyle]
          )
          .join(' ')
      : initStyle;
  }

  function getTypeStyle(initStyle: string, select: string) {
    return `${initStyle} ${styles[select.replace(/ /gi, '-').toLowerCase()]}`;
  }

  return (
    <div
      data-testid={TestId.formCard}
      className={`${styles.card} ${isBorder(radio) && styles.border}`}
    >
      <img className={styles.img} src={imageSrc}></img>
      <div className={getTypeStyle(styles.type, select)}>{select}</div>
      <span className={getTitleStyles(styles.title, checkbox)}>{name}</span>
      <span className={styles.name}>Date:</span>
      <span className={styles.value}>{date}</span>
      <span className={styles.name}>Title style:</span>
      <span className={styles.value}>{checkbox && checkbox.join(' | ')}</span>
      <span className={styles.name}>Border:</span>
      <span className={styles.value}>{isBorder(radio) ? 'Yes' : 'No'}</span>
      <button className={styles.button} onClick={() => dispatch(removeCard(id))}>
        Remove card
      </button>
    </div>
  );
}

export default FormCard;
