import { 
    CartitemContainer, 
    CartImage, 
    CartItemDetails, 
    CartName, 
    CartPrice 
} from "../styles/cart.styles"

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem

    return (

        <CartitemContainer>
            <CartImage src={imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <CartName as='span'>{name}</CartName>
                <CartPrice as='span'>{quantity} x ${price}</CartPrice>
            </CartItemDetails>
        </CartitemContainer>
    )
}

export default CartItem