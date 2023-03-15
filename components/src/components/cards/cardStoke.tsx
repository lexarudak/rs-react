import { CardInfo } from 'base/types';
import React from 'react';

class CardStoke extends React.Component<CardInfo> {
  constructor(props: CardInfo) {
    super(props);
  }

  private setStock() {
    if (this.props.stock > 0) {
      return <div className="card__stock">in stoke: {this.props.stock}</div>;
    }
    console.log('s');
    return <div className="card__stock card__stock_null">not in stock</div>;
  }

  public render() {
    return <>{this.setStock()}</>;
  }
}

export default CardStoke;
