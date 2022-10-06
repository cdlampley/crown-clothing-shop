import { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import CartItem from './CartItem'

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)

    const navigate = useNavigate()
    const goToCheckoutPage = () => {
        navigate('/checkout')
    }

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) =>(
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={goToCheckoutPage}>Checkout</Button>
        </div>
    )
}

export default CartDropDown