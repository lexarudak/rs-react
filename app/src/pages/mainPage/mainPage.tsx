import React from 'react';
import PageNames from '../../base/enums/pageNames';
import { PageProps } from '../../base/types';
import CardsContainer from '../../components/cards/cardContainer/cardsContainer';
import SearchInput from '../../components/input/searchInput/searchInput';
import Page from '../page/page';

class MainPage extends Page {
  state: Readonly<{ search: string }>;

  constructor(props: PageProps) {
    super(props, PageNames.mainPage);

    this.state = {
      search: '',
    };

    this.changeSearchVal = this.changeSearchVal.bind(this);
  }

  public changeSearchVal(searchVal: string) {
    this.setState({ search: searchVal });
  }

  public render() {
    return (
      <div className="main__container">
        <SearchInput searchValue={this.state.search} changeSearchVal={this.changeSearchVal} />
        <CardsContainer searchValue={this.state.search} />
      </div>
    );
  }
}

export default MainPage;
