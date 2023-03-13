import Nav from './components/nav/nav';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/aboutPage';
import MainPage from './pages/mainPage';
import ErrorPage from './pages/errorPage';
import RouteList from './components/enums/routeList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={RouteList.homePage} element={<MainPage />} />
        <Route path={RouteList.aboutPage} element={<AboutPage />} />
        <Route path={RouteList.errorPage} element={<ErrorPage />} />
        <Route path="*" element={<Navigate to={RouteList.errorPage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
