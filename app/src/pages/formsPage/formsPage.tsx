import React, { useEffect } from 'react';
import { FormCardsContainer, AppForm } from 'components';
import { useAppDispatch } from 'hooks';
import { setCurrentPage } from 'store';
import { PageNames } from 'models';
import styles from './FormsPage.module.scss';

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
