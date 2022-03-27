import { KeyboardBackspaceOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../mediaQueries'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient( rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.pexels.com/photos/1973293/pexels-photo-1973293.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
    background-position:center;
    background-size:cover;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 50%;
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
    flex-wrap:wrap;
`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin:20px 0;
`

const Button = styled.button`
    width: 40%;
    border:none;
    padding:15px 20px;
    background-color:#3498DB;
    color:white;
    cursor: pointer;
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


export const Register = () => {
  return (
    <Container>
        <ButtonHome>
        <KeyboardBackspaceOutlined /><Link to={"/"}>BACK HOME</Link>
        </ButtonHome>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nemo harum corporis deleniti. Accusantium, vitae. Dolor ipsum doloremque nihil! Repellat.
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}
