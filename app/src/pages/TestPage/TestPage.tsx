import React, { useEffect } from 'react';
import { InnerBanner } from 'components/banners';
import { useAppDispatch } from 'hooks';
import { setCurrentPage } from 'store';
import { PageNames } from 'models';

const TestPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(PageNames.testPage));
  }, [dispatch]);

  return <InnerBanner text="Test Page" />;
};

export default TestPage;
