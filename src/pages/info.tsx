import { NextPage } from "next";
import { useEffect } from "react";
import { Container } from "../components/Container";
import { PATH_TYPE } from "../constant";

const InfoPage:NextPage = () => {
  const path = "info"

  useEffect(() => {
    document.title = path;
  }, [])

  return <Container path={path} componentType={PATH_TYPE.info}/>
}

export default InfoPage;