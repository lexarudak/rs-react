import React from 'react';
import { Layout } from 'layout';
import { RouteList } from 'models';
import { TestPage, SecondPage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import '../styles/base.scss';

const AppRouter = () => (
  // <Routes>
  //   <Route path={RouteList.homePage} element={<Layout />}>
  //     <Route index element={<MainPage />} />
  //     <Route path={RouteList.aboutPage} element={<AboutPage />} />
  //     <Route path={RouteList.formsPage} element={<FormsPage />} />
  //     <Route path={RouteList.errorPage} element={<ErrorPage />} />
  //     <Route path="*" element={<Navigate to={RouteList.errorPage} />} />
  //   </Route>
  // </Routes>
  <Routes>
    <Route path={RouteList.homePage} element={<Layout />}>
      <Route index element={<TestPage />} />
      <Route path={RouteList.secondPage} element={<SecondPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
