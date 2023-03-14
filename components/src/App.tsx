import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/aboutPage';
import MainPage from './pages/mainPage';
import ErrorPage from './pages/errorPage';
import RouteList from './components/enums/routeList';
import PageNames from './components/enums/pageNames';
import Layout from './components/layout/layout';

class App extends React.Component {
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
      <>
        <BrowserRouter>
          <Routes>
            <Route path={RouteList.homePage} element={<Layout name={this.state.pageName} />}>
              <Route index element={<MainPage changeName={this.setPageName} />} />
              <Route
                path={RouteList.aboutPage}
                element={<AboutPage changeName={this.setPageName} />}
              />
              <Route
                path={RouteList.errorPage}
                element={<ErrorPage changeName={this.setPageName} />}
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
