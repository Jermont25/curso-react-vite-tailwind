import { useContext } from 'react';
import { Context } from '../../Context/index.jsx';

import OrderCard from '../../Components/OrderCard/index.jsx';

import Layout from '../../Components/Layout'

function MyOrder() {
  const context = useContext(Context);
  console.log(context.order)
  console.log('With slice: ', context.order.slice(-1))
  return (
    <Layout>
      My Order
      <div className='flex flex-col w-80'>
        {
          context.order?.slice(-1)[0].products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder