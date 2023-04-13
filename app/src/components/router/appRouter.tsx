import RouteList from '../../base/enums/routeList';
import Layout from '../layout/layout';
import AboutPage from '../../pages/aboutPage/aboutPage';
import ErrorPage from '../../pages/errorPage/errorPage';
import MainPage from '../../pages/mainPage/mainPage';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FormsPage from '../../pages/formsPage/formsPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteList.homePage} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={RouteList.aboutPage} element={<AboutPage />} />
          <Route path={RouteList.formsPage} element={<FormsPage />} />
          <Route path={RouteList.errorPage} element={<ErrorPage />} />
          <Route path="*" element={<Navigate to={RouteList.errorPage} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
