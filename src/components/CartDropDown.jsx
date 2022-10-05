import { useContext } from 'react'
import {CartContext} from '../context/cart.context'
import Button from './Button'
import CartItem from './CartItem'

const CartDropDown = () => {

    const { cartItems } = useContext(CartContext)

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) =>(
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button>Checkout</Button>
        </div>
    )
}

export default CartDropDown