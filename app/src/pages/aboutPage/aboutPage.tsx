import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';
import InnerBanner from '../../components/innerBanner/innerBanner';
import { setCurrentPage } from '../../store/app/appSlice';
import { useAppDispatch } from '../../hooks/hooks';

function AboutPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(PageNames.aboutPage));
  }, [dispatch]);

  return <InnerBanner text={PageNames.aboutPage} />;
}

export default AboutPage;
