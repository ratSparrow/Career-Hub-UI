import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
