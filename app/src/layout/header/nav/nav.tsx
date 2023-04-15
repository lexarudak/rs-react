import PageNames from '../../../base/enums/pageNames';
import RouteList from '../../../base/enums/routeList';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss';

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to={RouteList.homePage}>
        {PageNames.mainPage}
      </Link>
      <Link className={styles.link} to={RouteList.formsPage}>
        {PageNames.formsPage}
      </Link>
      <Link className={styles.link} to={RouteList.aboutPage}>
        {PageNames.aboutPage}
      </Link>
    </nav>
  );
}

export default Nav;
