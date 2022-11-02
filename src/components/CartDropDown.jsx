import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import CartItem from './CartItem'
import { CartDropDownContainer, CartItems, EmptyMessage } from '../styles/cart-dropdown.styles'
import { selectCartItems } from '../store/cart/cart.selector'

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems)

    const navigate = useNavigate()
    const goToShoppingBagPage = () => {
        navigate('/shopping-bag')
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
            <Button onClick={goToShoppingBagPage}>Shopping Bag</Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown