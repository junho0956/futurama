import { NextPage } from "next";
import { Container } from "../components/Container";
import { PATH_TYPE } from "../constant";

const Inventory:NextPage = () => {
  const path = "inventory"

  return <Container path={path} componentType={PATH_TYPE.inventory}/>
}

export default Inventory;