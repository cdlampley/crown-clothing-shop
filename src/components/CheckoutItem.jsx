import { useContext } from "react"
import { CartContext } from '../context/cart.context'
import { CheckoutItemContainer, CheckoutImage, ImageContainer,CheckoutName, CheckoutQuanity, CheckoutPrice, CheckoutValue, CheckoutRemoveButton, CheckoutArrow } from '../styles/checkout.styles'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem

    const { removeItemFromCartButton, addItemToCart, removeItemFromCart } = useContext(CartContext)

    const itemRemoveButton = () => removeItemFromCartButton(cartItem)
    const decreaseItemHandler = () => removeItemFromCart(cartItem)
    const increaseItemHandler = () => addItemToCart(cartItem)

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <CheckoutImage src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <CheckoutName as='span'>{name}</CheckoutName>
            <CheckoutQuanity>
                <CheckoutArrow onClick={decreaseItemHandler}>
                    &#10094;
                </CheckoutArrow>
                <CheckoutValue as='span'>{quantity}</CheckoutValue>
                <CheckoutArrow onClick={increaseItemHandler}>
                    &#10095;
                </CheckoutArrow>
            </CheckoutQuanity>
            <CheckoutPrice as='span'>${price}</CheckoutPrice>
            <CheckoutRemoveButton onClick={itemRemoveButton}>&#10005;</CheckoutRemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem