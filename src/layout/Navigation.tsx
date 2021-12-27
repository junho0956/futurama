import styled from "@emotion/styled"
import Link from "next/link"
import { ROUTES } from "../constant"


export const Navigation = () => {
  return (
    <Container>
      <NavBar>
        {ROUTES.map(route => {
          return (
            <NavMenu key={`navmenu-${route.id}`}>
              <Link href={route.path}>
                <a>{route.label}</a>
                {}
              </Link>
            </NavMenu>
          )
        })}
      </NavBar>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ebebeb;
  width: 100%;
  height: 60px;
`

const NavBar = styled.ul`
  display: flex;
  margin: 0;

`

const NavMenu = styled.li`
  height: 60px;
  min-width: 100px;
  line-height: 60px;
  list-style: none;
  text-align: center;

  &:hover {
    background-color: #777;
    color: #eee;
  }
`