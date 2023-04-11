import { PageProps } from '../../base/types';
import InnerBanner from '../../components/innerBanner/innerBanner';
import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';

function AboutPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.aboutPage);
  });

  return <InnerBanner text={PageNames.aboutPage} />;
}

export default AboutPage;
