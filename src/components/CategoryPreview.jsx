import ProductCard from "./ProductCard"
import { CategoryPreviewContainer, Preview, PreviewTitle } from "../styles/category.styles"

const CategoryPreview = ({ title, products }) => {


    return (
        <CategoryPreviewContainer>
            <h2>
                <PreviewTitle to={title}>{title.toUpperCase()}</PreviewTitle>
            </h2>
            <Preview>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) =>
                            <ProductCard key={product.id} product={product} />
                        )
                }
            </Preview>
        </CategoryPreviewContainer>
    )

}

export default CategoryPreview