import styled from "@emotion/styled"
import { InfoData } from "../types"

export const Info = ({data}: {data:InfoData[]}) => {
  return (
    <Container>
      <h1>Creator</h1>
      <CreatorList>
        {data[0].creators.map((creator) => {
          return (
            <CreatorItem key={`creator-${creator.name}`}>
              <dl>
                <dt>name: </dt>
                <dd>{creator.name}</dd>
                <dt>url: </dt>
                <dd><a href={creator.url}>{creator.url}</a></dd>
              </dl>
            </CreatorItem>
          )
        })}
      </CreatorList>
      <h2>Synopsis</h2>
      <p>{data[0].synopsis}</p>
      <h2>yearsAired</h2>
      <p>{data[0].yearsAired}</p>
    </Container>
  )
}

const Container = styled.main`
  padding: 2em;
`

const CreatorList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const CreatorItem = styled.li`
  & > dl > dt {
    font-size: 1.3rem;
    display: inline-block;
    margin: 0 20px;
  }

  & > dl > dd {
    margin: 0;
    display: inline-block;
  }
`