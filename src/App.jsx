import './App.css';

import MainRouter from './router/MainRouter';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <RouterProvider router={MainRouter} />
    </>
  );
}

export default App;
