import React from 'react';
import { Layout } from 'layout';
import { RouteList } from 'models';
import { AboutPage, ErrorPage, MainPage, FormsPage } from 'pages';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const AppRouter = () => (
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

export default AppRouter;
