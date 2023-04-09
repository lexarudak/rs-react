import TestId from '../../base/enums/testId';
import { PopupProps } from 'base/types';
import React from 'react';
import CloseButton from '../buttons/closeButton/closeButton';
import styles from './popup.module.scss';

function Popup({ isShow, children, closeFn }: PopupProps) {
  return (
    <div
      data-testid={TestId.popup}
      className={`${styles.popup} ${isShow && styles.active}`}
      onClick={(e) => {
        e.target === e.currentTarget && closeFn && closeFn();
      }}
    >
      <div className={styles.inner}>
        {closeFn && <CloseButton closeFn={closeFn} />}
        {children}
      </div>
    </div>
  );
}

export default Popup;
