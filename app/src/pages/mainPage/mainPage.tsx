import React, { useEffect } from 'react';
import { rickAndMortySelector, useSearchCharactersQuery, setCurrentPage } from 'store';
import { CardsContainer, Loading, InnerBanner, SearchForm } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { InnerText, PageNames } from 'models';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector(rickAndMortySelector);
  const { isFetching, currentData, isError } = useSearchCharactersQuery(searchValue);

  useEffect(() => {
    dispatch(setCurrentPage(PageNames.mainPage));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <SearchForm />
      {isFetching && <Loading />}
      {isError && <InnerBanner text={InnerText.noCards} />}
      {currentData && <CardsContainer cards={currentData} />}
    </div>
  );
};

export default MainPage;
