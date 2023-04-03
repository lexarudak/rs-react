import PageNames from '../../base/enums/pageNames';
import RouteList from '../../base/enums/routeList';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__link" to={RouteList.homePage}>
        {PageNames.mainPage}
      </Link>
      <Link className="nav__link" to={RouteList.formsPage}>
        {PageNames.formsPage}
      </Link>
      <Link className="nav__link" to={RouteList.aboutPage}>
        {PageNames.aboutPage}
      </Link>
    </nav>
  );
}

export default Nav;
