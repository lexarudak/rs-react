import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';
import CardsContainer from '../../components/containers/cardContainer/cardsContainer';
import SearchInput from '../../components/forms/searchForm/searchForm';
import InnerBanner from '../../components/innerBanner/innerBanner';
import Loading from '../../components/loading/loading';
import { useSearchCharactersQuery } from '../../store/rickAndMorty/rickAndMorty.api';
import styles from './mainPage.module.scss';
import InnerText from '../../base/enums/innerText';
import SliceNames from '../../base/enums/sliceNames';
import { setCurrentPage } from '../../store/app/appSlice';

function MainPage() {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state[SliceNames.rickAndMorty]);
  const { isFetching, currentData, isError } = useSearchCharactersQuery(searchValue);

  useEffect(() => {
    dispatch(setCurrentPage(PageNames.mainPage));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <SearchInput />
      {isFetching && <Loading />}
      {isError && <InnerBanner text={InnerText.noCards} />}
      {currentData && <CardsContainer cards={currentData} />}
    </div>
  );
}

export default MainPage;
