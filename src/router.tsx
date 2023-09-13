import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContainerPage from './pages/Container/ContainerPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'container',
        element: <ContainerPage />,
      },
    ],
  },
]);

export default router;
