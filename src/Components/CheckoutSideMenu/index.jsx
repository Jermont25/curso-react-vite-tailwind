import { useContext } from 'react';
import { Context } from '../../Context/index.jsx';

import { XMarkIcon } from '@heroicons/react/24/solid';
import './styles.css';

import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils/index.js'

const CheckoutSideMenu = ()=> {
    const context = useContext(Context);

    const handleDelete = (id)=> {
        const filteredProducts = context.cartProducts.filter((product)=> product.id !== id);
        context.setCartProducts(filteredProducts);
    }
    return (
        <aside 
        className={`${context.isCheckoutMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    My order
                </h2>
                <button
                onClick={()=> context.closeCheckoutMenu()}
                >
                    <XMarkIcon className="h-6 w-6 text-black" />
                </button>
            </div>
            <div className='px-6 overflow-y-scroll'>
            {
                context.cartProducts.map((product)=> (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
        </aside>
    );

};

export default CheckoutSideMenu;