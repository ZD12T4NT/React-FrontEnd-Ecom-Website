import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { SliderItems } from "../data"
import { mobile } from "../mediaQueries"
import { Link } from 'react-router-dom'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:#fffafa;
    position: relative;
    overflow:hidden;
    ${mobile({ display:"none"})}
`

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    top:0;
    bottom:0;
    // In styled componenets you can use props with template strings 
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    cursor: pointer;
    margin:auto;
    opacity:0.7;
    z-index:2;
`

const Wrapper = styled.div`
    height:100%;
    display:flex;
    transform:translateX(${props => props.slideIndex * -100}vw);
    transition:all 1.2s ease;
`

const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${props => props.bg};
`

const ImageContainer = styled.div`
    height:100%;
    flex:1;
`

const Image = styled.img`
    height:87.4%;

`

const InfoContainer = styled.div`
    padding:50px;
    flex:1;
`

const Title = styled.h1`
    font-size:70px;
`

const Desc = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:2px;
`

const Button = styled.button`
    padding:10px;
    font-size:20px;
    background:transparent;
    cursor: pointer;
    border: 2px solid #000;
    transition:all 0.3s ease-in-out;

    &:hover{
        background-color:#00000022;
    }
`


export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }

    }

  return (
    <div>
        <Container>
            <Arrow direction="left" onClick={()=>{handleClick("left")}}>
            <ArrowBackIosOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {SliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button><Link to={"/products/:category"}>SHOP NOW</Link></Button>
                </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowForwardIosOutlined />
            </Arrow>
        </Container>
    </div>
  )
}
