import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './config';

export const Routing = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element}>
          {route?.children?.map((childRoute) => (
            <Route key={childRoute.id} path={childRoute.path} element={childRoute.element} />
          ))}
        </Route>
      ))}
    </Routes>
  );
};
