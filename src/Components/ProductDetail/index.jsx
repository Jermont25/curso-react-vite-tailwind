import { useContext } from 'react';
import { Context } from '../../Context/index.jsx';
import { XMarkIcon } from '@heroicons/react/24/solid';
import './styles.css';

const ProductDetail = () => {
    const context = useContext(Context);
    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    Detail
                </h2>
                <button
                onClick={() => context.closeProductDetail()}
                >
                    <XMarkIcon className="h-6 w-6 text-black" />
                </button>
            </div>
            <figure className='px-6'>
                <img 
                className='w-36 max-w-36 h-auto max-h-48 rounded-lg'
                src={context.productToShow.image}
                alt={context.productToShow.description}
                />
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                    <span className='font-medium text-md'>{context.productToShow.title}</span>
                    <span className='font-light text-sm'>{context.productToShow.description}</span>
                </p>
            </figure>
        </aside>
    );

};

export default ProductDetail;