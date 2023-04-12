import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';
import { PageProps } from '../../base/models';
import FormCardsContainer from '../../components/containers/formCardsContainer/formCardsContainer';
import AppForm from '../../components/forms/appForm/appForm';
import styles from './formsPage.module.scss';

function FormsPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.formsPage);
  });

  return (
    <div className={styles.container}>
      <AppForm />
      <FormCardsContainer />
    </div>
  );
}

export default FormsPage;
