import MainLayout from '../layout/MainLayout';
import { Outlet } from 'react-router-dom';

const Homepage = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default Homepage;
