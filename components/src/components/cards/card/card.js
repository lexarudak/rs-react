import CardButton from '../../buttons/cardButton';
import React from 'react';
import CardImg from '../cardImg/cardImg';
import CardPrice from '../cardPrice/cardPrice';
import CardStock from '../cardStock/cardStock';
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      'div',
      { className: 'card', 'data-testid': 'card' },
      React.createElement(CardImg, { ...this.props }),
      React.createElement('div', { className: 'card__type' }, this.props.type),
      React.createElement('div', { className: 'card__title' }, this.props.title),
      React.createElement('div', { className: 'card__text' }, this.props.description),
      React.createElement(
        'div',
        { className: 'card__price-and-button' },
        React.createElement(CardPrice, { sale: this.props.sale, price: this.props.price }),
        React.createElement(CardButton, { ...this.props })
      ),
      React.createElement(CardStock, { stock: this.props.stock })
    );
  }
}
export default Card;
