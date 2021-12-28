import styled from "@emotion/styled";
import { EpisodesData } from "../types"

export const Episodes = ({data}: {data:EpisodesData[]}) => {

  return (
    <Container>
      <ul>
        {data.map((episode:EpisodesData) => {
          const { number, title, writers, originalAirDate, desc } = episode;
          return (
            <Episode key={`episode-${episode.number}`}>
              <div>{number} / {title}</div>
              <div>writers: {writers}</div>
              <div>originalAirDate: {originalAirDate}</div>
              <p>{desc}</p>
            </Episode>
          )
        })}
      </ul>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  width: 100%;
  margin: 0 auto;

  & > ul {
    display: flex;
    flex-direction: column;
  }
`

const Episode = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  & > div:first-of-type {
    font-size: 1.5rem;
    font-weight: bold;
  }
  &:hover {
    background-color: #ebebeb;
  }
`