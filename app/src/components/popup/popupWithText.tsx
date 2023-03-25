import React from 'react';

class PopupWithText extends React.Component<{ text: string; isPopupShow: boolean }> {
  constructor(props: { text: string; isPopupShow: boolean }) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          this.props.isPopupShow ? 'popup-with-text popup-with-text_active' : 'popup-with-text'
        }
      >
        <h2 className="popup-with-text__text">{this.props.text}</h2>
      </div>
    );
  }
}

export default PopupWithText;
