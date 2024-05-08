import { useContext } from 'react';
import { Context } from '../../Context/index.jsx';

import { XMarkIcon } from '@heroicons/react/24/solid';
import './styles.css';

import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils/index.js'
import { Link } from 'react-router-dom';

const CheckoutSideMenu = () => {
    const context = useContext(Context);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter((product) => product.id !== id);
        context.setCartProducts(filteredProducts);
    };

    const handleCheckout = () => {
        const orderToAdd = {
            date: '07.05.24',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        };

        context.setOrder([...context.order, orderToAdd]);

        context.setCartProducts([]);
    };

    return (
        <aside
            className={`${context.isCheckoutMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    My order
                </h2>
                <button
                    onClick={() => context.closeCheckoutMenu()}
                >
                    <XMarkIcon className="h-6 w-6 text-black" />
                </button>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map((product) => (
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
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button
                        className='w-full bg-black py-3 text-white rounded-lg'
                        onClick={() => { handleCheckout() }}
                    >
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    );

};

export default CheckoutSideMenu;