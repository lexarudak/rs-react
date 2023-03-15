import Search from '../components/input/search';
import React from 'react';
import PageNames from '../base/enums/pageNames';
import PageProps from '../base/types';
import Page from './page';

class MainPage extends Page {
  constructor(props: PageProps) {
    super(props, PageNames.mainPage);
  }

  public render() {
    return (
      <div className="main__container">
        <Search />
      </div>
    );
  }
}

export default MainPage;
