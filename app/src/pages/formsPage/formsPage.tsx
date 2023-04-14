import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';
import FormCardsContainer from '../../components/containers/formCardsContainer/formCardsContainer';
import AppForm from '../../components/forms/appForm/appForm';
import styles from './formsPage.module.scss';
import { setCurrentPage } from '../../store/app/appSlice';
import { useAppDispatch } from '../../hooks/hooks';

function FormsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(PageNames.formsPage));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <AppForm />
      <FormCardsContainer />
    </div>
  );
}

export default FormsPage;
