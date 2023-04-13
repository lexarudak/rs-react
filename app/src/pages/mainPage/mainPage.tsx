import { useActions, useAppSelector } from '../../hooks/hooks';
import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';
import CardsContainer from '../../components/containers/cardContainer/cardsContainer';
import SearchInput from '../../components/forms/searchForm/searchForm';
import InnerBanner from '../../components/innerBanner/innerBanner';
import Loading from '../../components/loading/loading';
import { useLazySearchCharactersQuery } from '../../store/rickAndMorty/rickAndMorty.api';
import styles from './mainPage.module.scss';
import InnerText from '../../base/enums/innerText';
import SliceNames from '../../base/enums/sliceNames';

function MainPage() {
  const { cards, initLoading } = useAppSelector((state) => state[SliceNames.rickAndMorty]);
  const { setCards, setSearchValue, endInitLoading, setCurrentPage } = useActions();
  const [fetchCharactersData, { isFetching }] = useLazySearchCharactersQuery();

  useEffect(() => {
    setCurrentPage(PageNames.mainPage);
  }, [setCurrentPage]);

  const fetchCards = async (searchValue: string) => {
    console.log(searchValue);
    setCards([]);
    const { data } = await fetchCharactersData(searchValue);
    setSearchValue(searchValue);
    setCards(data || []);
  };

  const makeInitLoading = () => {
    if (initLoading) {
      endInitLoading();
      fetchCards('');
    }
  };
  makeInitLoading();

  return (
    <div className={styles.container}>
      <SearchInput fetchData={fetchCards} />
      {isFetching && <Loading />}
      {!isFetching && !cards[0] && <InnerBanner text={InnerText.noCards} />}
      {cards[0] && <CardsContainer cards={cards} />}
    </div>
  );
}

export default MainPage;
