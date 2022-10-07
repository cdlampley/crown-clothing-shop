import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    )
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    }
    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}

const removeItem = (cartItems, removeItemFromCartButton) => cartItems.filter(cartItem => cartItem.id !== removeItemFromCartButton.id)

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    removeItemButton: () => { },
    itemTotalPrice: () => {},
    cartCount: 0,
    cartTotal: 0,
    itemPriceTotal: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    const [itemPriceTotal, setItemPriceTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    useEffect(() => {
        const newItemPriceTotal = cartItems.reduce((cartItem) => cartItem.quantity * cartItem.price, 0)
        setItemPriceTotal(newItemPriceTotal)
    }, [cartItems])

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product))
    }

    const removeItemFromCartButton = (product) => {
        setCartItems(removeItem(cartItems, product))
    }

    const value = { isCartOpen, setIsCartOpen, addCartItem, cartItems, addItemToCart, cartCount, removeItemFromCart, removeItemFromCartButton, cartTotal, itemPriceTotal }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


