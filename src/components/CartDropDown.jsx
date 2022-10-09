import { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import CartItem from './CartItem'
import { CartDropDownContainer, CartItems, EmptyMessage } from '../styles/cart-dropdown.styles'

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)

    const navigate = useNavigate()
    const goToCheckoutPage = () => {
        navigate('/checkout')
    }

    return(
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) =>(
                        <CartItem key={item.id} cartItem={item} />
                    ))) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutPage}>Checkout</Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown