import TestId from '../../../base/enums/testId';
import { FormPageCard } from 'base/types';
import React from 'react';
import { radioConfig } from '../../forms/appForm/appFormConfig/appFormConfig';
import styles from './formCard.module.scss';

function FormCard({ name, date, select, checkbox, radio, imageSrc }: FormPageCard) {
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
      <div className={getTitleStyles(styles.title, checkbox)}>{name}</div>
      <div>
        <span className={styles.name}>Date:</span>
        <span className={styles.value}>{date}</span>
      </div>
      <div>
        <span className={styles.name}>Title style:</span>
        <span className={styles.value}>{checkbox && checkbox.join(' | ')}</span>
      </div>
      <div>
        <span className={styles.name}>Border:</span>
        <span className={styles.value}>{isBorder(radio) ? 'Yes' : 'No'}</span>
      </div>
    </div>
  );
}

export default FormCard;
