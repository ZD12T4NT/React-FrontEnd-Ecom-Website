import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../mediaQueries' 
import { Link } from 'react-router-dom'


// These are the elements 
const Container = styled.div`
    height: 60px;
    ${mobile({ height:"50px"})}
   
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({ padding:"10px 0"})}

    
    `

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    `

const SearchContainer = styled.div`
    border:1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
    `

const Input = styled.input`
    border:none;
    ${mobile({ width:"50px"})}
`

const Language = styled.span`
    font-size:14px;
    cursor: pointer;    
    ${mobile({ display:"none"})}
`
const Center = styled.div`
    flex:1;
    text-align:center;`

const Logo = styled.h1`
    font-weight:bold;
    cursor: pointer;
    ${mobile({ fontSize:"24px"})}
`


const Right = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    ${mobile({flex:"2", justifyContent: "center"})}
    `

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left:25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`


export const Navbar = () => {
  return (
    //   Same as className='container' - This is styled-components
    <Container>
        <Wrapper>
      <Left>
          <Language>EN</Language>
          <SearchContainer>
              <Input placeholder='Search...'/>
             <Search style={{color:"gray", fontSize:16}} />
          </SearchContainer>
      </Left>
      <Center><Link to={'/'}><Logo>frozone.</Logo></Link></Center>
     <Right>
         <MenuItem><Link to={'/register'}>REGISTER</Link></MenuItem>
         <MenuItem><Link to={'/login'}>SIGN IN</Link></MenuItem>
         <MenuItem><Link to={'/cart'}>
         <Badge badgeContent={2} color="primary">
      <ShoppingCartOutlined/>
    </Badge>
    </Link>
         </MenuItem>
     </Right>
        </Wrapper>
    </Container>
  )
}
