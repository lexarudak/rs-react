import React from 'react';
// import { useAppSelector } from 'hooks';
// import { appSelector } from 'store';
import { Nav } from 'layout';
import styles from './Header.module.scss';

const Header = () => {
  // const { currentPage } = useAppSelector(appSelector);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Components.</h1>
      <span className={styles.pageTitle}>/ {'test mode'}</span>
      <Nav />
    </header>
  );
};

export default Header;
