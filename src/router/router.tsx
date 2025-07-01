import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { ErrorBoundary } from '../components/ui/ErrorBoundary'
import { NotFoundPage } from '../pages/NotFoundPage'
import { HomePage } from '../pages/HomePage'
import { GeneratorPage } from '../pages/GeneratorPage'
import { SettingsPage } from '../pages/SettingsPage'

// Define route configuration
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'generator',
        element: <GeneratorPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]

// Create and export the router
export const router = createBrowserRouter(routes)