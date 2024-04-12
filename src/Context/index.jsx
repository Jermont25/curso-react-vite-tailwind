import { createContext, useState } from 'react';


export const Context = createContext();

export const ContextProvider = ({children}) =>{
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false);

    const openProducDetail = () => setisProductDetailOpen(true);
    const closeProductDetail = () => setisProductDetailOpen(false);

    return (
        <Context.Provider value={{
            count,
            setCount,
            openProducDetail,
            closeProductDetail,
            isProductDetailOpen,

        }}>
            {children}
        </Context.Provider>
    );
};