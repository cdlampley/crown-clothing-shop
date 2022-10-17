import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../store/cart/cart.selector'
import { 
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart 
} from '../store/cart/cart.action'
import { 
    CheckoutItemContainer, 
    CheckoutImage, 
    ImageContainer,
    CheckoutName, 
    CheckoutQuanity, 
    CheckoutPrice, 
    CheckoutValue, 
    CheckoutRemoveButton, 
    CheckoutArrow 
} from '../styles/checkout.styles'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const itemRemoveButton = () => dispatch(clearItemFromCart(cartItems, cartItem))
    const decreaseItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
    const increaseItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))

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