import React from 'react';
// import { useAppSelector } from 'hooks';
// import { appSelector } from 'store';
import { Nav } from 'layout';
import styles from './Header.module.scss';
import { useAppSelector } from 'hooks';
import { appSelector } from 'store';

const Header = () => {
  const { currentPage } = useAppSelector(appSelector);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Components.</h1>
      <span className={styles.pageTitle}>/ {currentPage}</span>
      <Nav />
    </header>
  );
};

export default Header;
