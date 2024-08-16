import AppliedJobs from '../page/applied-jobs/AppliedJobs';
import ErrorPage from '../page/ErrorPage';
import Homepage from '../page/Homepage';
import JobDetails from '../page/job-details/JobDetails';
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
        loader: () => fetch('../jobs.json'),
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json'),
      },
    ],
  },
]);
export default MainRouter;
