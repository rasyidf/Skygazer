import React from 'react';
import { BrowserRouter as Router, Route, RouteObject, useRoutes, BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { AddObservationPage } from './pages/observation-log/AddObservationPage';
import { ObservationLogPage } from './pages/observation-log/ObservationLogPage';
import { OptionsPage } from './pages/options/OptionsPage';
import { SkyEventsCalendarPage } from './pages/sky-event/SkyEventsCalendarPage';
import { TelescopeCalculatorPage } from './pages/telescope-calculator/TelescopeCalculatorPage';
import { Layout } from './Layout';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [

      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: '/observation-log',
        element: <ObservationLogPage />,
      },
      {
        path: '/add-observation',
        element: <AddObservationPage />,
      },
      {
        path: '/sky-events-calendar',
        element: <SkyEventsCalendarPage />,
      },
      {
        path: '/telescope-calculator',
        element: <TelescopeCalculatorPage />,
      },
      {
        path: '/options',
        element: <OptionsPage />,
      }
    ]
  }
]);

const App = () => {

  return (
    <RouterProvider router={routes} />
  );
};

export default App;
