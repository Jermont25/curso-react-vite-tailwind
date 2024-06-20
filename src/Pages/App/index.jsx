import { useRoutes, BrowserRouter } from "react-router-dom";
import { ContextProvider } from "../../Context/index.jsx";

import "./App.css";
import Navbar from "../../Components/Navbar";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import NotFound from "../NotFound";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/index.jsx";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/all", element: <Home /> },
    { path: "/women's-clothes", element: <Home /> },
    { path: "/men's-clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/jewelery", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/my-orders/:last", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter basename="/curso-react-vite-tailwind">
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
