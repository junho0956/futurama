import styled from "@emotion/styled"
import { ROUTES } from "../constant"


export const Navigation = () => {
  return (
    <Container>
      <NavBar>
        {ROUTES.map(route => {
          return (
            <NavMenu key={`navmenu-${route.id}`}>
              <a href={route.path}>
                {route.label}
              </a>
            </NavMenu>
          )
        })}
      </NavBar>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  background-color: #ebebeb;
  height: 60px;
`

const NavBar = styled.ul`
  
`

const NavMenu = styled.li`
  height: 40px;
  line-height: 40px;
`