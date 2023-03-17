import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("nav", { className: "nav" },
            React.createElement(Link, { className: "nav__link", to: "/" /* RouteList.homePage */ }, "Home" /* PageNames.mainPage */),
            React.createElement(Link, { className: "nav__link", to: "about" /* RouteList.aboutPage */ }, "About Us" /* PageNames.aboutPage */)));
    }
}
export default Nav;
