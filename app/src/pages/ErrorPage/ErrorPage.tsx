import React, { useEffect } from 'react';
import { InnerBanner } from 'components';
import { useAppDispatch } from 'hooks';
import { setCurrentPage } from 'store';
import { PageNames } from 'models';

const ErrorPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(PageNames.errorPage));
  }, [dispatch]);

  return <InnerBanner text={PageNames.errorPage} />;
};

export default ErrorPage;
