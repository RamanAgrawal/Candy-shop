import './CartItem.css';
import { CartContext } from '../../contexts/CartContext';
const CartItem = ({id,name,price,description,amount,item}) => {
  
const {addCart,removeCart}=CartContext()

  return (
    <li key={id} className='cart-item'>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className='summary'>
         
          
          <span className='price'>{price}rs</span>
          <span className='amount'>x {amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={()=>removeCart(item)} >−</button>
        <button onClick={()=>{addCart({...item,quantity:1})}}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
