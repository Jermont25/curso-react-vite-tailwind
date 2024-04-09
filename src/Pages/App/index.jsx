import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ContextProvider } from '../../Context/index.jsx';

import './App.css';
import Navbar from '../../Components/Navbar';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFound from '../NotFound';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/sign-in', element: <SignIn />},
    { path: '/*', element: <NotFound />},
  ]);

  return routes;
};

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
