import React from 'react';
import { TestId, PopupProps } from 'models';
import { CloseButton } from 'components';
import styles from './Popup.module.scss';

const Popup = ({ isShow, children, closeFn }: PopupProps) => {
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    (e.target === e.currentTarget || e.target === e.currentTarget.firstChild) &&
    closeFn &&
    closeFn();

  return (
    <div
      data-testid={TestId.popup}
      className={`${styles.popup} ${isShow ? styles.active : ''}`}
      onClick={(e) => onClickHandler(e)}
    >
      <div className={styles.inner}>
        {closeFn && <CloseButton closeFn={closeFn} />}
        {children}
      </div>
    </div>
  );
};

export default Popup;
