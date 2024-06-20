import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/index.jsx";

const Navbar = () => {
  const context = useContext(Context);

  const activeStyle = "underline underline-offset-4";

  const navLinks = [
    { to: "/all", label: "All", category: "/all" },
    {
      to: "/women's-clothes",
      label: "Women's clothing",
      category: "women's clothing",
    },
    {
      to: "/men's-clothes",
      label: "Mens's clothing",
      category: "men's clothing",
    },
    {
      to: "/electronics",
      label: "Electronics",
      category: "electronics",
    },
    {
      to: "/jewelery",
      label: "Jewelery",
      category: "jewelery",
    },
  ];

  const userLinks = [
    { to: "/my-orders", label: "My orders" },
    { to: "/my-account", label: "My account" },
    { to: "/sign-in", label: "Sign in" },
  ];

  const renderNavLink = (link) => (
    <li key={link.to}>
      <NavLink
        to={link.to}
        onClick={() => context.setSearchByCategory(link.category)}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {link.label}
      </NavLink>
    </li>
  );

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/all"
            onClick={() => context.setSearchByCategory("/all")}
          >
            Shopi
          </NavLink>
        </li>
        {navLinks.map(renderNavLink)}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">ejemplo@gmail.com</li>
        {userLinks.map(renderNavLink)}
        <button
          className="flex items-center"
          onClick={() => {
            context.openCheckoutMenu();
          }}
        >
          <ShoppingBagIcon className="h-6 w-6 text-black" />
          <div>{context.cartProducts.length}</div>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
