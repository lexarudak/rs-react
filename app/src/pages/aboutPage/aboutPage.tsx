import { PageProps } from 'base/types';
import React, { useEffect } from 'react';
import PageNames from '../../base/enums/pageNames';

function AboutPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.aboutPage);
  });

  return <h2>{PageNames.aboutPage}</h2>;
}

export default AboutPage;
