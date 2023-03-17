import React from 'react';
class CardImg extends React.Component {
  constructor(props) {
    super(props);
  }
  setRating() {
    const rating = this.props.rating > 0 && this.props.rating <= 5 ? this.props.rating : 0;
    return React.createElement('span', { className: 'card__rating' }, rating.toFixed(1));
  }
  setSale() {
    const sale = Math.ceil(this.props.sale);
    if (sale > 0 && sale < 100) {
      return React.createElement('span', { className: 'card__sale' }, sale);
    }
  }
  render() {
    return React.createElement(
      'div',
      {
        className: 'card__img',
        style: {
          backgroundImage: 'this.props.thumbnail',
        },
      },
      React.createElement(React.Fragment, null, this.setSale()),
      React.createElement(React.Fragment, null, this.setRating())
    );
  }
}
export default CardImg;
