import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  // Product detail . Open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProducDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout side menu . Open/close
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
  const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
  const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);

  // Product detail . Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping cart . Add products to card
  const [cartProducts, setCartProducts] = useState([]);

  // Shoping cart . Order
  const [order, setOrder] = useState([]);

  //Get products
  const [items, setItems] = useState([]);

  //Filter search products
  const [filteredItems, setFilteredItems] = useState([]);

  //Search products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  console.log("", searchByTitle);

  //Search categories
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        let res = null;
        if (searchByCategory === null || searchByCategory === "/") {
          res = await fetch("https://fakestoreapi.com/products");
        } else {
          res = await fetch(
            `https://fakestoreapi.com/products/category/${searchByCategory}`
          );
        }

        if (!res) {
          throw new Error("Algo falló");
        }

        const data = await res.json();

        setItems(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [searchByCategory]);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }
  }, [items, searchByTitle]);

  return (
    <Context.Provider
      value={{
        openProducDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutMenuOpen,
        openCheckoutMenu,
        closeCheckoutMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
};
