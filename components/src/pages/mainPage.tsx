import Search from '../components/input/search';
import React from 'react';
import PageNames from '../base/enums/pageNames';
import { PageProps } from '../base/types';
import Page from './page';
import CardsContainer from '../components/cards/cardsContainer';

class MainPage extends Page {
  state: Readonly<{ search: string }>;

  constructor(props: PageProps) {
    super(props, PageNames.mainPage);

    this.state = {
      search: '',
    };

    this.changeSearchVal = this.changeSearchVal.bind(this);
  }

  public componentDidUpdate(): void {
    localStorage.setItem('searchVal', this.state.search);
  }

  public changeSearchVal(searchVal: string) {
    this.setState({ search: searchVal });
  }

  public render() {
    return (
      <div className="main__container">
        <Search searchValue={this.state.search} changeSearchVal={this.changeSearchVal} />
        <CardsContainer />
      </div>
    );
  }
}

export default MainPage;
