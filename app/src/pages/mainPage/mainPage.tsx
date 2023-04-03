import React, { useEffect, useState } from 'react';
import PageNames from '../../base/enums/pageNames';
import { PageProps } from '../../base/types';
import CardsContainer from '../../components/cards/cardContainer/cardsContainer';
import SearchInput from '../../components/input/searchInput/searchInput';

function MainPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.mainPage);
  });

  const [searchState, changeSearchState] = useState(localStorage.getItem('searchVal') || '');

  return (
    <div className="main__container">
      <SearchInput searchValue={searchState} changeSearchVal={changeSearchState} />
      <CardsContainer searchValue={searchState} />
    </div>
  );
}

export default MainPage;
