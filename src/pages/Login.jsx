import styled from 'styled-components'
import { mobile } from '../mediaQueries'
import { Link } from 'react-router-dom'
import { KeyboardBackspaceOutlined } from '@material-ui/icons'



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient( rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.pexels.com/photos/134069/pexels-photo-134069.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
    background-position:center;
    background-size:cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background: rgba(255, 255, 255, 0.66);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.2px);
    -webkit-backdrop-filter: blur(5.2px);
    font-weight: 300;
    ${mobile({ width: "75%"})}
`

const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`

const Form = styled.form`
    display: flex;
    flex-direction:column;
`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border:none;
    padding:15px 20px;
    background-color:#3498DB;
    color:white;
    cursor: pointer;
    margin-bottom:10px;
  `

const ButtonHome = styled.a`
width: 20%;
border:none;
padding:10px 10px;
background-color:#3498DB;
cursor: pointer;
margin-bottom:10px;
position:absolute;
top:30px;
left:20px;
display: flex;
justify-content: center;
align-items: center;
`

const ButtonLink = styled.a`
  margin:5px 0;
  font-size:12px;
  text-decoration:underline;
  cursor: pointer;
`



export const Login = () => {
  return (
    <Container>
        <ButtonHome>
        <KeyboardBackspaceOutlined /><Link to={"/"}>BACK HOME</Link>
        </ButtonHome>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Button>LOGIN</Button>
                <ButtonLink>Forgot Password?</ButtonLink>
                <ButtonLink>Create new account</ButtonLink>
            </Form>
        </Wrapper>
    </Container>
  )
}
