import { CardImgInfo } from 'base/types';
import React from 'react';

class CardImg extends React.Component<CardImgInfo> {
  constructor(props: CardImgInfo) {
    super(props);
  }

  private setRating() {
    if (this.props.rating) {
      return <span className="card__rating">{this.props.rating.toFixed(1)}</span>;
    }
  }

  private setSale() {
    const sale = Math.ceil(this.props.sale);
    if (sale > 0 && sale < 100) {
      return <span className="card__sale">{sale}</span>;
    }
  }

  public render() {
    return (
      <div
        className="card__img"
        style={{
          backgroundImage: this.props.thumbnail,
        }}
      >
        <>{this.setSale()}</>
        <>{this.setRating()}</>
      </div>
    );
  }
}

export default CardImg;
