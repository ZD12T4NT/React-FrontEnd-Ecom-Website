import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Announcement } from '../components/Announcement'
import { Products } from '../components/Products'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'
import { mobile } from '../mediaQueries'
import { useLocation } from 'react-router-dom'

const Container = styled.div`

`

const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection:"column"})}
`

const FilterText = styled.span`
  font-size:20;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight:"0" })}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0"})}
`

const Option = styled.option`

`
export const ProductList = () => {
  const location = useLocation(); 
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');


  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

  console.log(filters);
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>PRODUCTS</Title>
        <FilterContainer>
          <Filter>
            <FilterText>
            Filter Products:
            </FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled> Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Yellow</Option>
              <Option>Purple</Option>
            </Select>
            <Select name='size' onChange={handleFilters}>
              <Option disabled> Size</Option>
              <Option>Small</Option>
              <Option>Medium</Option>
              <Option>Large</Option>
              <Option>Extra Large</Option>
            </Select>
            </Filter>
                <Filter>
              <FilterText>Sort Products:</FilterText>
              <Select onChange={e => setSort(e.target.value)}>
                <Option value={'newest'}>Newest</Option>
                <Option value={'asc'} >Price (asc)</Option>
                <Option value={'desc'}>Price (desc)</Option>
              </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter />
        <Footer />
    </Container>
  )
}
