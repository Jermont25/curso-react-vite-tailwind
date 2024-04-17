import { useContext } from 'react';
import { Context } from '../../Context/index.jsx';
import { XMarkIcon } from '@heroicons/react/24/solid';
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
        </aside>
    );

};

export default CheckoutSideMenu;