import { createContext, useState } from 'react';


export const Context = createContext();

export const ContextProvider = ({children}) =>{
    // Product detail . Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProducDetail = ()=> setIsProductDetailOpen(true);
    const closeProductDetail = ()=> setIsProductDetailOpen(false);

     // Checkout side menu . Open/close
     const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
     const openCheckoutMenu= ()=> setIsCheckoutMenuOpen(true);
     const closeCheckoutMenu = ()=> setIsCheckoutMenuOpen(false);

    // Product detail . Show product
    const [productToShow, setProductToShow] = useState({});

    // Shopping cart . Add products to card
    const[cartProducts, setCartProducts] = useState([]);

    return (
        <Context.Provider value={{
            openProducDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutMenuOpen,
            openCheckoutMenu,
            closeCheckoutMenu

        }}>
            {children}
        </Context.Provider>
    );
};