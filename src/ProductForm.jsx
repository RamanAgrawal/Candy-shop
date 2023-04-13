import React, { useRef } from 'react'
import Input from './components/UI/Input'
import Button from './components/UI/Button'
import './ProductForm.css'

const ProductForm = ({onAdd,onHide}) => {
    const productRef = useRef('');
    const disRef = useRef('');
    const priceRef = useRef(0);
    const Add=(e)=>{
        e.preventDefault();
        const candy={
            name:productRef.current.value,
            description:disRef.current.value,
            price:priceRef.current.value,
            id:Math.random().toString()
        }

        onAdd(candy)
        e.target.reset()
    }
  return (
    <form className='form'  onSubmit={Add}>
    <div style={{display:'flex'}}>
    <Input label={'Product'} style={{marginRight:'20px'}} ref={productRef} input={{
        type: 'text',
        id: 'product'
    }
    } />
    <Input label={'Description'} style={{width:'250px',marginRight:'20px'}} ref={disRef} input={{
        type: 'text',
       
    }
    } />
    <Input label={'Price'} style={{width:'60px',marginRight:'20px'}} ref={priceRef} input={{
        type: 'number',
        id:'price'
    }
    } />
   
   
    </div>
    <div>
    <Button type='submit'>Add</Button>
    <Button onClick={onHide} >Cancel</Button>
    </div>
</form>
  )
}

export default ProductForm