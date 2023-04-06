import React from 'react';

function PopupWithText(props: { text: string; isPopupShow: boolean }) {
  return (
    <div
      data-testid="popup-with-text"
      className={props.isPopupShow ? 'popup popup_active' : 'popup'}
    >
      <h2 className="banner">{props.text}</h2>
    </div>
  );
}

export default PopupWithText;
