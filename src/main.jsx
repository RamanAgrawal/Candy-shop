import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ShoWCartProvider from './contexts/ShowCartContext'
import CartProvider from './contexts/CartContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ShoWCartProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ShoWCartProvider>,
)
