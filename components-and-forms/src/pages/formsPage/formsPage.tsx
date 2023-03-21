import AppForm from './appForm/appForm';
import FormCardsContainer from './formCards/formCardsContainer';
import React from 'react';
import PageNames from '../../base/enums/pageNames';
import { PageProps } from '../../base/types';
import Page from '../page/page';

class FormsPage extends Page {
  constructor(props: PageProps) {
    super(props, PageNames.formsPage);
  }

  public render() {
    return (
      <div className="main__container">
        <AppForm />
        <FormCardsContainer />
      </div>
    );
  }
}

export default FormsPage;
