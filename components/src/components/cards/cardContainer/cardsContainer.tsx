import React from 'react';
import Card from '../card';
import plants from '../../../data/plants.json';

class CardsContainer extends React.Component<{ searchValue: string }> {
  constructor(props: { searchValue: string }) {
    super(props);
  }

  private setFilterArr() {
    const str = this.props.searchValue.toUpperCase();
    return plants.products.filter(
      (plant) =>
        plant.description.toUpperCase().includes(str) ||
        plant.title.toUpperCase().includes(str) ||
        plant.type.toUpperCase().includes(str)
    );
  }

  public render() {
    return (
      <div className="cards-container">
        {this.setFilterArr().map((plant) => (
          <Card {...plant} key={plant.id} />
        ))}
      </div>
    );
  }
}

export default CardsContainer;
