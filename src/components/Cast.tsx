import styled from "@emotion/styled"
import { CastData } from "../types"

export const Cast = ({data}: {data:CastData[]}) => {
  return (
    <Container>
      {data.map(cast => {
        const { name, born, died, bio} = cast;
        return (
          <Item key={`cast-${cast.id}`}>
            <InfoWrap>
              <p>Name: {name}</p>
              <p>Born: {born}</p>
              <a href={bio.url}>More Info: {bio.url}</a>
              {died && (<p>Died: {died}</p>)}
            </InfoWrap>
          </Item>
        )
      })}
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
`

const Item = styled.article`
  display: flex;
  padding: 1em;
`

const InfoWrap = styled.div`
  width: 100%;
  margin: 5px 0;
  &:hover {
    background-color: #ebebeb;
  }
`