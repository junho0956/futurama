import { NextPage } from "next";
import { Container } from "../components/Container";
import { PATH_TYPE } from "../constant";

const InfoPage:NextPage = () => {
  const path = "info"

  return <Container path={path} componentType={PATH_TYPE.info}/>
}

export default InfoPage;