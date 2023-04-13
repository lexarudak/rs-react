import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';
import InnerBanner from '../../components/innerBanner/innerBanner';
import { useActions } from '../../hooks/hooks';

function AboutPage() {
  const { setCurrentPage } = useActions();

  useEffect(() => {
    setCurrentPage(PageNames.aboutPage);
  }, [setCurrentPage]);

  return <InnerBanner text={PageNames.aboutPage} />;
}

export default AboutPage;
