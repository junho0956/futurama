import { Error, Loading } from "../components";
import { PATH_TYPE } from "../constant";
import { useSWRData } from "../hooks/useSWRData";
import { Info } from "./";

interface ContainerProps {
  path: string;
  componentType: string;
}

export const Container = ({path, componentType}: ContainerProps) => {
  const {data, error} = useSWRData(path);

  if(error) return <Error />;
  if(!data) return <Loading />;

  switch(componentType) {
    case PATH_TYPE.info: {
      return <Info data={data} />
    }
    case PATH_TYPE.characters: {
      
    }
    default: {
      return <div>없는 페이지인데요?</div>;
    }
  }
}