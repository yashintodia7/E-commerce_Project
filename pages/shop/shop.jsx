import React from 'react'
import {PRODUCTS} from '../../products'
import { Product } from './product'
import './shop.css'
export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Products</h1>
        </div>
        <div className='products'>
  {PRODUCTS.map((product) => (
    
    <Product data={product}/>
  ))}
</div><br/>
<footer className="bg-body-tertiary text-center text-lg-start py-4">
 
  <div className="container text-center">
    <p className="mb-0 text-muted">
      © 2024 <strong>Ecommerce Website</strong>
    </p>
  </div>

</footer>


    </div>
  )
}
