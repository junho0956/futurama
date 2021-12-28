import { NextPage } from "next";
import { Container } from "../components/Container";
import { PATH_TYPE } from "../constant";

const Question:NextPage = () => {
  const path = "questions"

  return <Container path={path} componentType={PATH_TYPE.questions}/>
}

export default Question;