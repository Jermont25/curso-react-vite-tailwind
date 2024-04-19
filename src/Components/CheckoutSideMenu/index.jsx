import { useContext } from 'react';
import { Context } from '../../Context/index.jsx';
import { XMarkIcon } from '@heroicons/react/24/solid';
import OrderCard from '../OrderCard';
import './styles.css';

const CheckoutSideMenu = ()=> {
    const context = useContext(Context);
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
            <div className='px-6'>
            {
                context.cartProducts.map((product)=> (
                    <OrderCard 
                    key={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    />
                ))
            }
            </div>
        </aside>
    );

};

export default CheckoutSideMenu;