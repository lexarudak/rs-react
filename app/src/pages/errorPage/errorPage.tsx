import InnerBanner from '../../components/innerBanner/innerBanner';
import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';
import { setCurrentPage } from '../../store/app/appSlice';
import { useAppDispatch } from '../../hooks/hooks';

function ErrorPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(PageNames.errorPage));
  }, [dispatch]);

  return <InnerBanner text={PageNames.errorPage} />;
}

export default ErrorPage;
