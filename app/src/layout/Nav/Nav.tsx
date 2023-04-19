import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST } from 'models';
import styles from './Nav.module.scss';

const Nav = () => {
  const fillNav = () =>
    NAV_LIST.map(([key, route, name]) => (
      <Link className={styles.link} to={route} key={key}>
        {name}
      </Link>
    ));

  return <nav className={styles.nav}>{fillNav()}</nav>;
};

export default Nav;
