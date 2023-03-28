import PageNames from '../../base/enums/pageNames';
import RouteList from '../../base/enums/routeList';
import Layout from '../layout/layout';
import AboutPage from '../../pages/aboutPage/aboutPage';
import ErrorPage from '../../pages/errorPage/errorPage';
import MainPage from '../../pages/mainPage/mainPage';
import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import FormsPage from '../../pages/formsPage/formsPage';

function AppRouter() {
  const [pageName, changePageName] = useState(PageNames.mainPage);

  return (
    <Routes>
      <Route path={RouteList.homePage} element={<Layout pageName={pageName} />}>
        <Route index element={<MainPage changeName={changePageName} />} />
        <Route path={RouteList.aboutPage} element={<AboutPage changeName={changePageName} />} />
        <Route path={RouteList.errorPage} element={<ErrorPage changeName={changePageName} />} />
        <Route path={RouteList.formsPage} element={<FormsPage changeName={changePageName} />} />
        <Route path="*" element={<Navigate to={RouteList.errorPage} />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
