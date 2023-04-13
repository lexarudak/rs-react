import InnerBanner from '../../components/innerBanner/innerBanner';
import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';
import { useActions } from '../../hooks/hooks';

function ErrorPage() {
  const { setCurrentPage } = useActions();

  useEffect(() => {
    setCurrentPage(PageNames.errorPage);
  }, [setCurrentPage]);

  return <InnerBanner text={PageNames.errorPage} />;
}

export default ErrorPage;
