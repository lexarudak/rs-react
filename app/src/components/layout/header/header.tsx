import PageNames from 'base/enums/pageNames';
import Nav from '../../nav/nav';
import React from 'react';

function Header(props: { pageName: PageNames }) {
  return (
    <header className="header">
      <h1 className="header__name">React Components.</h1>
      <span className="header__page-name">/ {props.pageName}</span>
      <Nav />
    </header>
  );
}

export default Header;
