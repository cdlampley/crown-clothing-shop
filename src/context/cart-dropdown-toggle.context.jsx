import { createContext, useState } from "react";


//get the toggle to work where you click on the cart and it shows the dropdown as well as hides it

//contains information on the items in the cart as well as if the cart is open or not

//store the state of whether or not the dropdown is open or not

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => {}    
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const value = {isCartOpen, setIsCartOpen}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
