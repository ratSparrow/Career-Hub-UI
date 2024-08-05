import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto min-h-screen">
        <Header></Header>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
