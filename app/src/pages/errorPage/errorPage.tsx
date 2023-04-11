import InnerBanner from '../../components/innerBanner/innerBanner';
import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';
import { PageProps } from '../../base/types';

function ErrorPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.errorPage);
  });

  return <InnerBanner text={PageNames.errorPage} />;
}

export default ErrorPage;
