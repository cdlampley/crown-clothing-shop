import { useNavigate } from "react-router-dom"
import { DirectoryItemContainer, DirectoryItemBody, BackgroundImage } from "../styles/directory-item.styles"

const DirectoryItem = ({ category }) => {

    const { imageUrl, title, route } = category

    const navigate = useNavigate()
    const goToProductPage = () => navigate(route)


    return (
        <DirectoryItemContainer onClick={goToProductPage}>
            <BackgroundImage
                imageUrl={imageUrl}
            />
            <DirectoryItemBody>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem