import PageNames from 'base/enums/pageNames';
import Nav from '../../nav/nav';
import React from 'react';

class Header extends React.Component<{ name: PageNames }> {
  constructor(props: { name: PageNames }) {
    super(props);
  }

  public render() {
    return (
      <header className="header">
        <h1 className="header__name">React Components.</h1>
        <span className="header__page-name">/ {this.props.name}</span>
        <Nav />
      </header>
    );
  }
}

export default Header;
