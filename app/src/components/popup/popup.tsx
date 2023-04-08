import TestId from '../../base/enums/testId';
import { PopupProps } from 'base/types';
import React from 'react';
import CloseButton from '../buttons/closeButton/closeButton';
import style from './popup.module.scss';

function Popup({ isShow, children, closeFn }: PopupProps) {
  return (
    <div
      data-testid={TestId.popup}
      className={`${style.popup} ${isShow && style.active}`}
      onClick={(e) => {
        e.target === e.currentTarget && closeFn && closeFn();
      }}
    >
      {closeFn && <CloseButton closeFn={closeFn} />}
      {children}
    </div>
  );
}

export default Popup;
