
import React from 'react'
import './ProductList.css'
import { CartContext } from '../contexts/CartContext';
const ProductList = ({ candy }) => {
const {addCart}=CartContext()

    return (
        <div className='container'>
        <ul>
            {candy.map((candy) => (

                <li key={candy.id} className='candy'>
                    <div>
                        <h3>{candy.name}</h3>
                        <div className='description'>{candy.description}</div>

                    </div>
                    <div className='price'>{candy.price}</div>
                    <div>
                        <button onClick={()=>{addCart({...candy,quantity:1})}} >Add 1 </button>
                        <button onClick={()=>{addCart({...candy,quantity:2})}}>Add 2 </button>
                        <button onClick={()=>{addCart({...candy,quantity:3})}}>Add 3 </button>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default ProductList