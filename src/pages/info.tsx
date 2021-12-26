import { NextPage } from "next";
import { Error, Loading } from "../components";
import { useSWRData } from "../hooks/useSWRData";

const Info:NextPage = () => {
  const path = 'info';
  const {data, error} = useSWRData(path);

  if(error) return <Error />;
  if(!data) return <Loading />;

  return(
    <div>
      <h1>info</h1>
    </div>
  )
}

export default Info;