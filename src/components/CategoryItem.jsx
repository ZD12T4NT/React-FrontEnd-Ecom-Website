import { Link } from 'react-router-dom'
import styled  from 'styled-components'
import { mobile } from '../mediaQueries'

// The element must be correct in order for them to appear as for example 'button' or 'h1'
const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position: relative;
`

const Image = styled.img`
    object-fit:cover;
    width:100%;
    height:100%;
    ${mobile({ height:"25vh"})}
`

const Info = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

`

const Title = styled.h1`
    color:#fff;
    margin-bottom:20px;
`

const Button = styled.button`
    border:none;
    padding:10px;
    background-color:#fff;
    color:#000;
    cursor: pointer;
    font-weight:600;
    transition:all 0.3s ease-in-out;

    &:hover{
        background:#dedede9b;
    }
`

export const CategoryItem = ({item}) => {
  return (
        <Container>
            <Link to={`/products/${item.cat}`}>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
  )
}


export default CategoryItem;

