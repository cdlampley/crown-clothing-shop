import { useSelector} from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import CheckoutItem from '../CheckoutItem'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from '../../styles/checkout.styles'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'

const ShoppingBag = () => {

    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    const navigate = useNavigate()
    const goToCheckoutPage = () => {
        navigate('/checkout')
    }

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem) => {
                    return(
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }
            <Total as='span'>Total: ${cartTotal}</Total>
            <Button onClick={goToCheckoutPage}>Go To Checkout</Button>
        </CheckoutContainer>
    )
}

export default ShoppingBag