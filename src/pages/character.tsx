import { NextPage } from "next";
import { Container } from "../components/Container";
import { PATH_TYPE } from "../constant";

const Character:NextPage = () => {
  const path = "characters"

  return <Container path={path} componentType={PATH_TYPE.characters}/>
}

export default Character;