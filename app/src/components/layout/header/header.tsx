import Nav from './nav/nav';
import React from 'react';
import styles from './header.module.scss';
import { useAppSelector } from '../../../hooks/hooks';
import SliceNames from '../../../base/enums/sliceNames';

function Header() {
  const { currentPage } = useAppSelector((state) => state[SliceNames.app]);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Components.</h1>
      <span className={styles.pageTitle}>/ {currentPage}</span>
      <Nav />
    </header>
  );
}

export default Header;
