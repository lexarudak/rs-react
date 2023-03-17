import Layout from '../layout/layout';
import AboutPage from '../../pages/aboutPage';
import ErrorPage from '../../pages/errorPage';
import MainPage from '../../pages/mainPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
class AppRouter extends React.Component {
  state;
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Home' /* PageNames.mainPage */,
    };
    this.setPageName = this.setPageName.bind(this);
  }
  setPageName(name) {
    this.setState({ pageName: name });
  }
  render() {
    return React.createElement(
      Routes,
      null,
      React.createElement(
        Route,
        {
          path: '/' /* RouteList.homePage */,
          element: React.createElement(Layout, { name: this.state.pageName }),
        },
        React.createElement(Route, {
          index: true,
          element: React.createElement(MainPage, { changeName: this.setPageName }),
        }),
        React.createElement(Route, {
          path: 'about' /* RouteList.aboutPage */,
          element: React.createElement(AboutPage, { changeName: this.setPageName }),
        }),
        React.createElement(Route, {
          path: '404' /* RouteList.errorPage */,
          element: React.createElement(ErrorPage, { changeName: this.setPageName }),
        }),
        React.createElement(Route, {
          path: '*',
          element: React.createElement(Navigate, { to: '404' /* RouteList.errorPage */ }),
        })
      )
    );
  }
}
export default AppRouter;
