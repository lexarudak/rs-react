import React from 'react';
import { Layout } from 'layout';
import { RouteList } from 'models';
import { MainPage, AboutPage, ErrorPage, FormsPage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import '../styles/base.scss';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={RouteList.homePage} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={RouteList.formsPage} element={<FormsPage />} />
        <Route path={RouteList.aboutPage} element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
