import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const PreviewTitle = styled(Link)`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`

export const CategoryTitle = styled.h2`
    font-size: 38px;
    margin-bottom: 25px;
    text-transform: uppercase;
    text-align: center;
`

export const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`