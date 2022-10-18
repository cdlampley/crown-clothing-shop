import { useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard'
import { CategoryContainer, CategoryTitle } from '../../styles/category.styles'
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector'
import Spinner from '../Spinner'

const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <Fragment>
            <CategoryTitle>{category}</CategoryTitle>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <CategoryContainer>
                        {
                            products &&
                            products.map((product) => <ProductCard key={product.id} product={product} />)
                        }
                    </CategoryContainer>
                )
            }
        </Fragment>
    )
}

export default Category