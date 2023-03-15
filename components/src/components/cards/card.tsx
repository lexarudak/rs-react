import { CardInfo } from 'base/types';
import React from 'react';

class Card extends React.Component<CardInfo> {
  constructor(props: CardInfo) {
    super(props);
  }

  public render() {
    return (
      <div className="card">
        <div
          className="card__img"
          style={{
            backgroundImage: this.props.thumbnail,
          }}
        >
          <></>
          <></>
        </div>
        <div className="card__type">{this.props.type}</div>
        <div className="card__title">{this.props.title}</div>
        <div className="card__text">{this.props.description}</div>
        <div className="card__price-and-button">
          <p className="card__price">20$</p>
          <button className="card__button">Add to cart</button>
        </div>
        <div className="card__stoke">in stoke: 36</div>
      </div>
    );
  }
}

export default Card;
