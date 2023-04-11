import TestId from '../../base/enums/testId';
import { PopupProps } from 'base/types';
import React from 'react';
import CloseButton from '../buttons/closeButton/closeButton';
import styles from './popup.module.scss';

function Popup({ isShow, children, closeFn }: PopupProps) {
  return (
    <div
      data-testid={TestId.popup}
      className={isShow ? `${styles.popup} ${styles.active}` : styles.popup}
      onClick={(e) => {
        (e.target === e.currentTarget || e.target === e.currentTarget.firstChild) &&
          closeFn &&
          closeFn();
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
