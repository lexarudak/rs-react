import { PopupProps } from 'base/types';
import React from 'react';
import CloseButton from '../buttons/closeButton/closeButton';

function Popup({ isShow, children, closeFn }: PopupProps) {
  return (
    <div
      data-testid="popup"
      className={`popup ${isShow && 'popup_active'}`}
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
