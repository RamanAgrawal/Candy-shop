import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
const Cart = React.createContext({
    item: [],
    totalAmount: 0,
    addCart: () => { },
    removeCart: () => { },
    changeCart: () => { }
})
let numberOfItems = 0;
const defaultState = {
    items: [],
    totalAmount: 0
}
const reducer = (state, action) => {
    if (action.type === 'Change') {
        let totalAmount = 0;
        action.item.data.forEach(item => ((
            totalAmount += +item.price * (+item.quantity),
            numberOfItems += +item.quantity
        )))
        return ({ items: action.item.data, totalAmount: totalAmount })
    }
    if (action.type === 'Add') {
        console.log(action.item);
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingItemIndex]
        console.log(existingCartItem);
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + action.item.quantity }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem
        }
        else {
            updatedItems = state.items.concat(action.item)
        }

        numberOfItems += action.item.quantity
        const totalAmount = +state.totalAmount + (+action.item.price) * action.item.quantity
        return { items: updatedItems, totalAmount: totalAmount }
    }
    if (action.type === 'Remove') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingItemIndex]

        let updatedItems;
        if (existingCartItem.quantity === 1) {

            updatedItems = state.items.filter(item => item.id !== action.item.id)

        }
        else {
            const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        }

        numberOfItems -= 1
        const totalAmount = +state.totalAmount - action.item.price
        return { items: updatedItems, totalAmount: totalAmount }
    }
    return defaultState
}

const CartProvider = ({ children }) => {
    const [cartState, despatchCartAction] = useReducer(reducer, defaultState)
    const addToCartHandler = (item) => {
        despatchCartAction({ type: 'Add', item: item })

    }
    const removeFromCartHandler = (item) => {
        despatchCartAction({ type: 'Remove', item: item })
    }
    const changeCart = (item) => {
        despatchCartAction({ type: 'Change', item: item })

    }

    useEffect(() => {
        const postHandler = async () => {
            if (cartState.items.length !== 0) {
                try {
                    await axios.put(`https://my-first-project-c381c-default-rtdb.firebaseio.com/cart.json`, {
                        data: cartState.items
                    })
                } catch (error) {
                    console.log(error);
                }
            }
        }
        postHandler()
    }, [cartState.items])


    return <Cart.Provider value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addCart: addToCartHandler,
        removeCart: removeFromCartHandler,
        changeCart: changeCart,
        numberOfItems
    }}>{children}</Cart.Provider>
}

export default CartProvider
export const CartContext = () => {
    return useContext(Cart)
}