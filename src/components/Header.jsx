import { AppBar, IconButton, Stack, Toolbar } from '@mui/material'
import React from 'react'
import Button from './UI/Button'
import { ShowCartContext } from '../contexts/ShowCartContext'
import { CartContext } from '../contexts/CartContext'
const Header = () => {
    const {showCart}=ShowCartContext()
    const {numberOfItems}=CartContext()

    return (<AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='end'>LOGO</IconButton>
        </Toolbar>
       <Button onClick={showCart}>Cart{numberOfItems}</Button>
    </AppBar>

    )
}

export default Header