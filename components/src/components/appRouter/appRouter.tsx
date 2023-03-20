import PageNames from '../../base/enums/pageNames';
import RouteList from '../../base/enums/routeList';
import Layout from '../layout/layout';
import AboutPage from '../../pages/aboutPage/aboutPage';
import ErrorPage from '../../pages/errorPage/errorPage';
import MainPage from '../../pages/mainPage/mainPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

class AppRouter extends React.Component {
  state: Readonly<{ pageName: PageNames }>;

  constructor(props: string) {
    super(props);

    this.state = {
      pageName: PageNames.mainPage,
    };

    this.setPageName = this.setPageName.bind(this);
  }

  private setPageName(name: PageNames) {
    this.setState({ pageName: name });
  }

  public render() {
    return (
      <Routes>
        <Route path={RouteList.homePage} element={<Layout name={this.state.pageName} />}>
          <Route index element={<MainPage changeName={this.setPageName} />} />
          <Route path={RouteList.aboutPage} element={<AboutPage changeName={this.setPageName} />} />
          <Route path={RouteList.errorPage} element={<ErrorPage changeName={this.setPageName} />} />
          <Route path="*" element={<Navigate to={RouteList.errorPage} />} />
        </Route>
      </Routes>
    );
  }
}

export default AppRouter;
