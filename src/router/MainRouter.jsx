import Homepage from '../page/Homepage';
import { createBrowserRouter } from 'react-router-dom';

const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    children: [
      {
        path: '/',
        element: <div>Banner</div>,
      },
    ],
  },
]);
export default MainRouter;
