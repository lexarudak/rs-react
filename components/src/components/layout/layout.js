import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/footer';
import Header from './header/header';
class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Header, { ...this.props }),
      React.createElement('main', { className: 'main' }, React.createElement(Outlet, null)),
      React.createElement(Footer, null)
    );
  }
}
export default Layout;
