import { NextPage } from "next";
import { Container } from "../components/Container";
import { PATH_TYPE } from "../constant";

const Episodes:NextPage = () => {
  const path = "episodes"

  return <Container path={path} componentType={PATH_TYPE.episodes}/>
}

export default Episodes;