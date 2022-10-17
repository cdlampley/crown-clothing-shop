import { useDispatch, useSelector } from "react-redux"
import { selectCartItems } from "../store/cart/cart.selector"
import { addItemToCart } from "../store/cart/cart.action"
import Button, { button_types } from "./Button"
import { 
    ProductCartContainer, 
    CardFooter, 
    CardName, 
    CardPrice 
} from '../styles/products.styles'


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
  
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`} />
            <CardFooter>
                <CardName as='span'>{name}</CardName>
                <CardPrice as='span'>{price}</CardPrice>
            </CardFooter>
                <Button 
                buttonType={button_types.inverted} 
                onClick={addProductToCart}>Add to cart</Button>
        </ProductCartContainer>
    )
}

export default ProductCard