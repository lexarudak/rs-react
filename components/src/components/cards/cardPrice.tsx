import { CardInfo } from 'base/types';
import React from 'react';

class CardPrice extends React.Component<CardInfo> {
  constructor(props: CardInfo) {
    super(props);
  }

  private makeNewPrice() {
    return Math.floor(this.props.price * ((100 - this.props.sale) / 100));
  }

  private makePrice(isSale: boolean) {
    if (isSale) {
      return (
        <>
          <p className="card__price card__price_sale">{this.makeNewPrice()}</p>
          <p className="card__price card__price_old">{this.props.price}</p>
        </>
      );
    }
    return <p className="card__price">{this.props.price}</p>;
  }

  private isSale() {
    return this.props.sale > 0 && this.props.sale <= 100;
  }

  public render() {
    return (
      <div className="card__prices">
        <>{this.makePrice(this.isSale())}</>
      </div>
    );
  }
}

export default CardPrice;
