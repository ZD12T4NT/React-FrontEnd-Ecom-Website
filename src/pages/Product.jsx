import { Add, Remove } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { mobile } from '../mediaQueries'
import axios from 'axios'


const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"})}
`
const ImageContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh"})}
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0 50px;
    ${mobile({ padding: "10px"})}
`

const Title = styled.h1`
    font-weight: 200;

`

const Desc = styled.p`
    margin: 20px 0;
`

const Price = styled.span`
    font-weight: 100;
    font-size:40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content:space-between;
    ${mobile({ width: "100%"})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`


const FilterTitle = styled.span`
    font-size:20px;
    font-weight: 200;
`

const FilterSize = styled.select`
    margin-left: 5px;
    padding: 5px;
`

const FilterColor = styled.select`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props => props.color};
    margin:0 5px;
    cursor: pointer;
`

const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    ${mobile({ width: "100%"})}
`

const AmountContainer = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius:10px;
    border:1px solid #3498DB;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`

const Button = styled.button`
    padding: 15px;
    border:2px solid #3498DB ;
    background-color:white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color:#3498DB;
        color:white;
    }
`


export const Product = ({cat, filters, sort}) => {

    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])

    useEffect(() => {
       const getProducts = async () => {
        try{
            const res = await axios.get(cat ? `https://localhost:3000/api/products?category=${cat}` : "https://localhost:3000/api/products")
            console.log(res);
        }   catch (err) {}
       };
      getProducts()
    }, [cat]);

    useEffect(() => {
        cat && setFilterProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) => {
                
            }))
        )
    })


  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImageContainer>
                <Image src="https://images.pexels.com/photos/2624077/pexels-photo-2624077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            </ImageContainer>
            <InfoContainer>
                <Title>Ski Goggles</Title>
                <Desc>Sun Blocking ski goggles with beautiful tints! Look good and protect your eyes at the same time!</Desc>
                <Price>£ 30</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="purple" />
                        <FilterColor color="black" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                        <FilterSizeOption>Small</FilterSizeOption>
                        <FilterSizeOption>Medium</FilterSizeOption>
                        <FilterSizeOption>Large</FilterSizeOption>
                        <FilterSizeOption>Extra Large</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}
