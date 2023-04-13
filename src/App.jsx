
import Header from './components/Header'
import './App.css'
import ProductList from './components/ProductList'
import ProductForm from './ProductForm'
import { useEffect, useState } from 'react'
import Button from './components/UI/Button'
import { ShowCartContext } from './contexts/ShowCartContext'
import Cart from './components/cart/cart'
import CartProvider from './contexts/CartContext'
import axios from 'axios'
import { CartContext } from './contexts/CartContext'

function App() {
  const {changeCart}=CartContext()
  const {showcart}=ShowCartContext()
  const [showForm, setShowForm] = useState(false)
  const [candy, setCandy] = useState([])
  const showFormHandler = () => {
    setShowForm(true)
  }
  const hideFormHandler = () => {
    setShowForm(false)
  }
useEffect(()=>{
const cartData=async()=>{
  const res=await axios(`https://my-first-project-c381c-default-rtdb.firebaseio.com/cart.json`)

  changeCart(res.data)
}
const candyList=async()=>{
  const res=await axios(`https://my-first-project-c381c-default-rtdb.firebaseio.com/candys.json`)
  console.log(res.data.newCandy);
  setCandy(()=>{
    return [...res.data.newCandy]
  })
}
candyList()
cartData()
},[])
  const AddCandyHandler = (candy) => {
    setCandy(prev => {
      return [...prev, candy]
    })
  }
  useEffect(()=>{
    const newCandyHandler=async()=>{
      if(candy){
      try {
        await axios.put('https://my-first-project-c381c-default-rtdb.firebaseio.com/candys.json',{
          newCandy:candy
        })
      } catch (error) {
        console.log(error);
      }
    }
  }
  newCandyHandler()
  },[candy])

  return (
    <>
      <Header />
      {showForm ? <ProductForm onAdd={AddCandyHandler} onHide={hideFormHandler} /> :
        <div style={{ marginInline: 'auto', width: '200px' }}><Button onClick={showFormHandler}>AddCandy</Button></div>}
      <ProductList candy={candy} />
      {showcart&&<Cart />}
    </>
  )
}

export default App
