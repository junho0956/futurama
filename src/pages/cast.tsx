import { NextPage } from "next";
import { Container } from "../components/Container";
import { PATH_TYPE } from "../constant";

const Cast:NextPage = () => {
  const path = "cast"

  return <Container path={path} componentType={PATH_TYPE.cast}/>
}

export default Cast;