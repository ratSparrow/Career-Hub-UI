import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h2>Oops!!!</h2>
      <NavLink to="/">Go to Home</NavLink>
    </div>
  );
};

export default ErrorPage;
