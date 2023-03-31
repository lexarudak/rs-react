import React from 'react';

function PopupWithText(props: { text: string; isPopupShow: boolean }) {
  return (
    <div
      data-testid="popup-with-text"
      className={props.isPopupShow ? 'popup-with-text popup-with-text_active' : 'popup-with-text'}
    >
      <h2 className="popup-with-text__text">{props.text}</h2>
    </div>
  );
}

export default PopupWithText;
