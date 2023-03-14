import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/aboutPage';
import MainPage from './pages/mainPage';
import ErrorPage from './pages/errorPage';
import RouteList from './components/enums/routeList';
import PageNames from './components/enums/pageNames';
import Layout from './components/layout/layout';

class App extends React.Component {
  pageName: PageNames;
  state: Readonly<{ pageName: PageNames }>;

  constructor(props: string) {
    super(props);

    this.pageName = PageNames.homePage;

    this.state = {
      pageName: PageNames.homePage,
    };
  }

  private setPageName(name: PageNames) {
    this.setState({ pageName: name });
  }

  public render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path={RouteList.homePage} element={<Layout name={this.state.pageName} />}>
              <Route
                index
                element={<MainPage changeName={this.setPageName.bind(this, PageNames.homePage)} />}
              />
              <Route
                path={RouteList.aboutPage}
                element={
                  <AboutPage changeName={this.setPageName.bind(this, PageNames.aboutPage)} />
                }
              />
              <Route
                path={RouteList.errorPage}
                element={
                  <ErrorPage changeName={this.setPageName.bind(this, PageNames.errorPage)} />
                }
              />
              <Route path="*" element={<Navigate to={RouteList.errorPage} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
