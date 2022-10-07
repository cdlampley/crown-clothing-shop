import { useContext } from "react"
import { CartContext } from '../context/cart.context'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem

    const { removeItemFromCartButton, addItemToCart, removeItemFromCart } = useContext(CartContext)

    const itemRemoveButton = () => removeItemFromCartButton(cartItem)
    const decreaseItemHandler = () => removeItemFromCart(cartItem)
    const increaseItemHandler = () => addItemToCart(cartItem)

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decreaseItemHandler}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={increaseItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={itemRemoveButton}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem