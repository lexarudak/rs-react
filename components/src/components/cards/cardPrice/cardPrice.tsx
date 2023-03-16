import React from 'react';

class CardPrice extends React.Component<{ sale: number; price: number }> {
  sale;
  price;
  constructor(props: { sale: number; price: number }) {
    super(props);

    this.sale = Math.ceil(this.props.sale);
    this.price = this.props.price;
  }

  private makePriceWithCents(price: number) {
    const str = price.toFixed(2);
    console.log('str:', str, str.slice(0, -3));
    return (
      <>
        <span>{str.slice(0, -3)}</span>
        <span className="card__cents">{str.slice(-3)}</span>
      </>
    );
  }

  private makeNewPrice() {
    return this.price * ((100 - this.sale) / 100);
  }

  private isPriceInvalid() {
    return this.price <= 0 || this.price > 9999;
  }

  private makePrice(isSale: boolean) {
    if (this.isPriceInvalid()) return <p className="card__price"> -</p>;
    if (isSale) {
      return (
        <>
          <p className="card__price card__price_sale">
            {this.makePriceWithCents(this.makeNewPrice())}
          </p>
          <span className="card__price card__price_old">{this.makePriceWithCents(this.price)}</span>
        </>
      );
    }
    return <p className="card__price">{this.makePriceWithCents(this.price)}</p>;
  }

  private isSale() {
    return this.sale > 0 && this.sale < 100;
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
