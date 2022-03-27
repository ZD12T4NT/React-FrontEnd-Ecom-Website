import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:#3498DB;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    font-weight:500;
`

export const Announcement = () => {
  return (
    <div>
        <Container>
            Super deal! Over 30% OFF on first order!
        </Container>
    </div>
  )
}

export default Announcement
