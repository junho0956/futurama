import { InfoData } from "../types"

export const Info = ({data}: {data:InfoData[]}) => {
  return (
    <div>
      <div>Creator</div>
      <ul>
        {data[0].creators.map((creator) => {
          return (
            <li key={`creator-${creator.name}`}>
              <dl>
                <dt>name: </dt>
                <dd>{creator.name}</dd>
                <dt>url: </dt>
                <dd><a href={creator.url}>{creator.url}</a></dd>
              </dl>
            </li>
          )
        })}
      </ul>
      <div>Synopsis</div>
      <p>{data[0].synopsis}</p>
      <div>yearsAired</div>
      <p>{data[0].yearsAired}</p>
    </div>
  )
}