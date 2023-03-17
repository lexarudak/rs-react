import React from 'react';
import Card from '../card';
import plants from '../../../data/plants.json';
class CardsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  setFilterArr() {
    const str = this.props.searchValue.toUpperCase();
    return plants.products.filter(
      (plant) =>
        plant.description.toUpperCase().includes(str) ||
        plant.title.toUpperCase().includes(str) ||
        plant.type.toUpperCase().includes(str)
    );
  }
  render() {
    return React.createElement(
      'div',
      { className: 'cards-container' },
      this.setFilterArr().map((plant) => React.createElement(Card, { ...plant, key: plant.id }))
    );
  }
}
export default CardsContainer;
