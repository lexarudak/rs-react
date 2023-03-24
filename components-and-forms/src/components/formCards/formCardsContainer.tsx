import React from 'react';

class FormCardsContainer extends React.Component {
  constructor(props: string) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="form-cards-container">
        <h2 className="title">Your cards</h2>
      </div>
    );
  }
}

export default FormCardsContainer;
