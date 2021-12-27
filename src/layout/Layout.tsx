import styled from "@emotion/styled"
import { Navigation } from "./Navigation"

export const Layout:React.FC = ({children}) => {
  return (
    <div>
      <Navigation />
      <Container>
        {children}
      </Container>
    </div>
  )
}

const Container = styled.div`
  margin-top: 60px;
`