import RouteList from '../enums/routeList';
import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props: string) {
    super(props);
  }

  public render() {
    return (
      <nav className="nav">
        <h2 className="nav__name"></h2>
        <Link className="nav__link" to={RouteList.homePage}>
          Home
        </Link>
        <Link className="nav__link" to={RouteList.aboutPage}>
          About Us
        </Link>
      </nav>
    );
  }
}

export default Nav;
