import React from 'react';
class CardPrice extends React.Component {
  sale;
  price;
  constructor(props) {
    super(props);
    this.sale = Math.ceil(this.props.sale);
    this.price = this.props.price;
  }
  makePriceWithCents(price) {
    const str = price.toFixed(2);
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('span', null, str.slice(0, -3)),
      React.createElement('span', { className: 'card__cents' }, str.slice(-3))
    );
  }
  makeNewPrice() {
    return this.price * ((100 - this.sale) / 100);
  }
  isPriceInvalid() {
    return this.price < 0.01 || this.price > 9999.99;
  }
  makePrice(isSale) {
    if (this.isPriceInvalid()) return React.createElement('p', { className: 'card__price' }, ' -');
    if (isSale) {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'p',
          { className: 'card__price card__price_sale' },
          this.makePriceWithCents(this.makeNewPrice())
        ),
        React.createElement(
          'span',
          { className: 'card__price card__price_old' },
          this.makePriceWithCents(this.price)
        )
      );
    }
    return React.createElement(
      'p',
      { className: 'card__price' },
      this.makePriceWithCents(this.price)
    );
  }
  isSale() {
    return this.sale > 0 && this.sale <= 99;
  }
  render() {
    return React.createElement(
      'div',
      { className: 'card__prices' },
      React.createElement(React.Fragment, null, this.makePrice(this.isSale()))
    );
  }
}
export default CardPrice;
