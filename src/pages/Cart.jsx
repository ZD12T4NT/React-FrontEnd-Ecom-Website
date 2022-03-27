import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { mobile } from '../mediaQueries'
const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding:"10px"})}
`

const Title = styled.h1`
    font-weight:300;
    text-align:center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props => props.type === 'filled' && 'none'};
    background-color:${props => props.type === 'filled' ? '#3498DB' : 'transparent'};
    color:${props => props.type === 'filled' && 'white'};


`

const TopTexts = styled.div`
    ${mobile({ display:"none"})}
`

const Toptext = styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin:0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})}
`

const Info = styled.div`
    flex:3;
`

const Hr = styled.hr`
    border:none;
    background-color:#eee;
    height: 1px;
`

const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding: 20px;
    height: 80vh;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    ${mobile({ flexDirection: "column"})}
`

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
`

const Image = styled.img`
    width: 220px;
`
const ProductName = styled.span`

`

const ProductId = styled.span`

`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color:${props => props.color};
`

const ProductSize = styled.span`

`

const PriceDetail = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:20px;
`   

const ProductAmount = styled.div`
    font-size:24px;
    margin: 5px;
    ${mobile({ margin:"15px 15px"})}
`

const ProductPrice = styled.div`
    font-size:28px;
    font-weight:200;
    ${mobile({ marginBottom:"10px"})}
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin:30px 0;
    display: flex;
    justify-content: space-between;
    font-weight:${props => props.type === 'total' && ' 500'};
    font-size: ${props => props.type === 'total' && '24px'}; 
`

const SummaryItemText = styled.span`

`

const Button = styled.button`
    width: 100%;
    padding:10px;
    background-color:#3498DB;
    color:white;
    border:none;
    cursor: pointer;
    font-weight:600;
`

const SummaryItemPrice = styled.span`

`

export const Cart = () => {
  return (
   <Container>
       <Navbar />
       <Announcement />
       <Wrapper>
           <Title>YOUR BAG</Title>
           <Top>
               <TopButton>CONTINUE SHOPPING</TopButton>
               <TopTexts>
                   <Toptext>Shopping Bag(2)</Toptext>
                   <Toptext>Wishlist (0)</Toptext>
               </TopTexts>
               <TopButton type='filled'>CHECKOUT</TopButton>
           </Top>
           <Bottom>
               <Info>
                   <Product>
                       <ProductDetail>
                           <Image src="https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                           <Details>
                               <ProductName> <b>Product:</b> Ski Set</ProductName>
                               <ProductId> <b>ID:</b>9182737465</ProductId>
                               <ProductColor color='black' />
                               <ProductSize> <b>Size:</b> Adult</ProductSize>
                           </Details>
                       </ProductDetail>
                       <PriceDetail>
                           <ProductAmountContainer>
                               <Add />
                               <ProductAmount>1</ProductAmount>
                               <Remove />
                           </ProductAmountContainer>
                           <ProductPrice>£ 559</ProductPrice>
                       </PriceDetail>
                   </Product>
                   <Hr />
                   <Product>
                       <ProductDetail>
                           <Image src="https://images.pexels.com/photos/2083159/pexels-photo-2083159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                           <Details>
                               <ProductName> <b>Product:</b> Clear Snow Goggles</ProductName>
                               <ProductId> <b>ID:</b>75647382910</ProductId>
                               <ProductColor color='gray' />
                               <ProductSize> <b>Size:</b> Large</ProductSize>
                           </Details>
                       </ProductDetail>
                       <PriceDetail>
                           <ProductAmountContainer>
                               <Add />
                               <ProductAmount>2</ProductAmount>
                               <Remove />
                           </ProductAmountContainer>
                           <ProductPrice>£ 110</ProductPrice>
                       </PriceDetail>
                   </Product>
               </Info>
               <Summary>
                   <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                   <SummaryItem>
                       <SummaryItemText>Subtotal</SummaryItemText>
                       <SummaryItemPrice>£ 669</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryItemText>Estimated Shipping</SummaryItemText>
                       <SummaryItemPrice>FREE</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryItemText>Discount</SummaryItemText>
                       <SummaryItemPrice>-30%</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem type="total"> 
                       <SummaryItemText >Total</SummaryItemText>
                       <SummaryItemPrice>£ 468.30</SummaryItemPrice>
                   </SummaryItem>
                   <Button>CHECKOUT</Button>
               </Summary>
           </Bottom>
       </Wrapper>
       <Footer />
   </Container>
  )
}
