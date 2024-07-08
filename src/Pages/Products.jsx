import React, { useContext } from 'react'
import ProductSection from '../Components/Shop/ProductSection'
import CartContext from '../Context/CartContext'
import CartSection from '../Components/Cart/CartSection'


const Products = () => {
  const {Product,ShowCart} = useContext(CartContext)
  return (
   <div className='pt-20'>
   <ProductSection  Products={Product}/>
     {/* Cart Section */}
     <CartSection Show={ShowCart} />
   </div>
  )
}

export default Products