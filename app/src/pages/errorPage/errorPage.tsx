import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';
import { PageProps } from '../../base/types';

function ErrorPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.errorPage);
  });

  return <h2>{PageNames.errorPage}</h2>;
}

export default ErrorPage;
