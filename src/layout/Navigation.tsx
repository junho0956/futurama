import styled from "@emotion/styled"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { ROUTES } from "../constant"

export const Navigation = () => {
  return (
    <Container>
      <header>
        <Link href="/info">FUTURAMA</Link>
      </header>
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
  line-height: 60px;
  z-index: 9999;
  & > header {
    margin-left: 100px;
    font-size: 1.5rem;
    font-weight: bolder;
  }
`

const NavBar = styled.ul`
  display: flex;
  position: absolute;
  margin: 0;
  top: 0;
  right: 100px;
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
    font-weight: bold;
  }
`