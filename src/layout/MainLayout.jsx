import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.children,
};
