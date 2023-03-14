import RouteList from '../enums/routeList';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PageNames from 'components/enums/pageNames';

class Layout extends React.Component<{ name: PageNames }> {
  constructor(props: { name: PageNames }) {
    super(props);
    console.log(props);
  }

  public render() {
    return (
      <>
        <header className="header">
          <h2 className="header__name">{this.props.name}</h2>
          <Link className="header__link" to={RouteList.homePage}>
            Home
          </Link>
          <Link className="header__link" to={RouteList.aboutPage}>
            About Us
          </Link>
        </header>

        <Outlet />

        <footer>2023 (c)</footer>
      </>
    );
  }
}

export default Layout;
