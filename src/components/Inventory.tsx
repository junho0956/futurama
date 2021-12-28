import styled from "@emotion/styled";
import { InventoryData } from "../types"

export const Inventory = ({data}: {data:InventoryData[]}) => {

  return (
    <Container>
      <ul>
        {data.map((inventory:InventoryData) => {
          const { id, category, description, price, slogan, stock, title } = inventory;
          return (
            <Item key={`inventory-${id}`}>
              <div>{title}</div>
              <div>category: {category}</div>
              <div>slogan: {slogan}</div>
              <div>price: {price} / stock: {stock}</div>
              <p>{description}</p>
            </Item>
          )
        })}
      </ul>
    </Container>
  )
}

const Container = styled.main`
  
  & > ul {
    display: flex;
    flex-direction: column;
  }
`

const Item = styled.li`
  list-style: none;
  margin: 10px 0;
  &>div:first-of-type {
    font-size: 1.5rem;
    font-weight: bold;
  }
  &:hover {
    background-color: #ebebeb;
  }
`