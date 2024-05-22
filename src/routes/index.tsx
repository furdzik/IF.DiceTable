import React, { useLayoutEffect, ReactElement } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';

import MainPage from '../components/MainPage';

const RouterWrapper = (props: { children: ReactElement }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return props.children;
};

const RoutesConfig = () => (
  <BrowserRouter>
    <RouterWrapper>
      <Routes>
        <Route
          path="/"
          element={(
            <MainPage />
          )}
        />
      </Routes>
    </RouterWrapper>
  </BrowserRouter>
);

export default RoutesConfig;
