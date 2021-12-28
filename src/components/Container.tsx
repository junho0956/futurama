import { useEffect } from "react";
import { PATH_TYPE } from "../constant";
import { useSWRData } from "../hooks/useSWRData";
import { 
  Info, 
  Cast, 
  Characters, 
  Episodes, 
  Error, 
  Inventory, 
  Loading, 
  Questions
} from "./";

interface ContainerProps {
  path: string;
  componentType: string;
}

export const Container = ({path, componentType}: ContainerProps) => {
  const {data, error} = useSWRData(path);
  
  useEffect(() => {
    document.title = path;
  }, [path])

  if(error) return <Error />;
  if(!data) return <Loading />;

  switch(componentType) {
    case PATH_TYPE.info: {
      return <Info data={data} />
    }
    case PATH_TYPE.characters: {
      return <Characters data={data} />
    }
    case PATH_TYPE.cast: {
      return <Cast data={data} />
    }
    case PATH_TYPE.episodes: {
      return <Episodes data={data} />
    }
    case PATH_TYPE.inventory: {
      return <Inventory data={data} />
    }
    case PATH_TYPE.questions: {
      return <Questions data={data} />
    }
    default: {
      return <div>No Page</div>;
    }
  }
}