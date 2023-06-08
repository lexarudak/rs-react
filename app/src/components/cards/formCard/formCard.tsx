import React from 'react';
import { FormPageCard, TestId } from 'models';
import { APP_FORM_CONFIG } from 'components';
import { useAppDispatch } from 'hooks';
import { removeCard } from 'store';
import styles from './FormCard.module.scss';

const FormCard = ({ name, date, select, checkbox, radio, imageSrc, id }: FormPageCard) => {
  const BORDER = 'Yes';
  const NO_BORDER = 'No';
  const {
    RADIO: {
      VALUES_ARR: [{ text }],
    },
  } = APP_FORM_CONFIG;
  const dispatch = useAppDispatch();

  const isBorder = (textValue: string | null) => text === textValue;

  const getTitleStyles = (initStyle: string, checkbox: false | string[]) =>
    checkbox
      ? checkbox
          .reduce(
            (acc, style) => [...acc, styles[style.replace(/ /gi, '-').toLowerCase()]],
            [initStyle]
          )
          .join(' ')
      : initStyle;

  const getTypeStyle = (initStyle: string, select: string) =>
    `${initStyle} ${styles[select.replace(/ /gi, '-').toLowerCase()]}`;

  const onClickHandler = () => dispatch(removeCard(id));

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
      <span className={styles.value}>{isBorder(radio) ? BORDER : NO_BORDER}</span>
      <button className={styles.button} onClick={() => onClickHandler()}>
        Remove card
      </button>
    </div>
  );
};

export default FormCard;
