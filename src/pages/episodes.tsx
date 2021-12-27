import { NextPage } from "next";
import { Error, Loading } from "../components";
import { useSWRData } from "../hooks/useSWRData";

const Episodes:NextPage = () => {
  const path = 'episodes';
  const {data, error} = useSWRData(path);

  if(error) return <Error />
  if(!data) return <Loading />

  console.log(data);

  return(
    <div>
      <h1>episodes</h1>
    </div>
  )
}

export default Episodes;