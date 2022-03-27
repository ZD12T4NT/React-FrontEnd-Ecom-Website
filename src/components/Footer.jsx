import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Cover from '../components/Images/Cover.svg'
import { mobile } from '../mediaQueries'
import { Link } from'react-router-dom'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
    margin: 20px 0;

`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color:white;
    // This will get the color for each icon
    background-color:#${props => props.color};
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;
    margin-right: 20px;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display:"none"})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    list-style:none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover{
        text-decoration:underline;
    }
`

const Right = styled.div`
    padding: 20px;
    flex:1;
    ${mobile({ backgroundColor:"lightgray"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

export const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>frozone.</Logo>
        <Desc>
            Welcome to frozone. where you can get the best snow adventure needs!
        </Desc>
        <SocialContainer>
            <SocialIcon color="3b5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color='e4405f'>
                <Instagram />
            </SocialIcon>
            <SocialIcon color='55acee'>
                <Twitter/>
            </SocialIcon>
            <SocialIcon color='e60023'>
                <Pinterest />
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem> <Link to={'/'}>Home</Link></ListItem>
                <ListItem> <Link to={'/cart'}>Cart</Link></ListItem>
                <ListItem> <Link to={'/products/:category'}>Shop Now</Link></ListItem>
                <ListItem> <Link to={'/register'}>My Account</Link></ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}} />123 Random Street, UK</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}} />+1 234 56 78</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}} />contact@gmail.com</ContactItem>
            <Payment src={Cover} />
        </Right>
    </Container>
  )
}
