import React, { useEffect } from 'react';
import { InnerBanner } from 'components';
import { useAppDispatch } from 'hooks';
import { setCurrentPage } from 'store';
import { PageNames } from 'models';

const AboutPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(PageNames.aboutPage));
  }, [dispatch]);

  return <InnerBanner text={PageNames.aboutPage} />;
};

export default AboutPage;
