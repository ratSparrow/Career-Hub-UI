import AppliedJobs from '../page/applied-jobs/AppliedJobs';
import ErrorPage from '../page/ErrorPage';
import Homepage from '../page/Homepage';
import MainLayout from '../layout/MainLayout';
import { createBrowserRouter } from 'react-router-dom';

const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/jobs',
        element: <AppliedJobs></AppliedJobs>,
      },
    ],
  },
]);
export default MainRouter;
