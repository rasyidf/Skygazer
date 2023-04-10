import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { AddObservationPage } from './pages/observation-log/AddObservationPage';
import { ObservationLogPage } from './pages/observation-log/ObservationLogPage';
import { OptionsPage } from './pages/options/OptionsPage';
import { SkyEventsCalendarPage } from './pages/sky-event/SkyEventsCalendarPage';
import { TelescopeCalculatorPage } from './pages/telescope-calculator/TelescopeCalculatorPage';
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

const theme : MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Inter, sans-serif',
}

const App = () => {

  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={routes} />
    </MantineProvider>
  );
};

export default App;
