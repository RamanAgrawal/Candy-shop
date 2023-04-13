import React from 'react'
import CartItem from './CartItem'
import './Cart.css'
import Model from '../Ui/Model'
import { CartContext } from '../../contexts/CartContext'
import { ShowCartContext } from '../../contexts/ShowCartContext'
const Cart = () => {
    const {items,totalAmount}=CartContext()
    const {hideCart}=ShowCartContext()
    console.log(items);
     const cartItems=<ul>{items.map(item=>(
        <CartItem
        item={item}
        id={item.id}
        name={item.name}
        price={item.price}
        description={item.description}
        amount={item.quantity}
        >

        </CartItem>
     ))}</ul>

  return (
    <Model>
    <div style={{maxHeight:'400px'}} >  
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>{totalAmount}Rs</span>
           
            </div>
            <div className='actions'>
                <button onClick={hideCart}>Close</button>
                {items && <button>Order</button>}
                
            </div>
        </div>
        </Model>
  )
}

export default Cart