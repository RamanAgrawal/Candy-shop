import { useState } from "react";
import React from 'react'
import { useContext } from "react";

const ShowCart = React.createContext()

const ShoWCartProvider = (props) => {
    const [showcart, setShowCart] = useState(false)
    const showCartHandler = () => {
        setShowCart(true)
    }
    const hideCartHandler = () => {
        setShowCart(false)
     
    }

 return <ShowCart.Provider value={{
        showcart:showcart,
        hideCart: hideCartHandler,
        showCart: showCartHandler,
    }}>
        {props.children}
    </ShowCart.Provider>
}
export default ShoWCartProvider
export const ShowCartContext = () => {
    return useContext(ShowCart)
}