import { useActions } from '../../hooks/hooks';
import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';
import FormCardsContainer from '../../components/containers/formCardsContainer/formCardsContainer';
import AppForm from '../../components/forms/appForm/appForm';
import styles from './formsPage.module.scss';

function FormsPage() {
  const { setCurrentPage } = useActions();

  useEffect(() => {
    setCurrentPage(PageNames.formsPage);
  }, [setCurrentPage]);

  return (
    <div className={styles.container}>
      <AppForm />
      <FormCardsContainer />
    </div>
  );
}

export default FormsPage;
