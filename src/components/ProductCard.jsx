import { useContext } from 'react'
import Button, { button_types } from "./Button"
import { CartContext } from '../context/cart.context'
import { ProductCartContainer, CardFooter, CardName, CardPrice } from '../styles/products.styles'


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

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