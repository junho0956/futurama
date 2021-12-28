import styled from "@emotion/styled";
import { NextPage } from "next";
import {useRouter} from "next/router";
import { Error, Loading } from "../../components";
import { MEDIA_OPTIONS } from "../../constant";
import { useSWRData } from "../../hooks/useSWRData";
import { CharacterData } from "../../types";

const CharacterItem:NextPage = () => {
  
  const router = useRouter();
  const name = router.query.name;
  const path = 'characters';
  const { data, error } = useSWRData(path);

  if(error) return <Error />;
  if(!data) return <Loading />;

  const characterInfo:CharacterData[] = data.filter((character:CharacterData) => {
    const curName = character.name.first+character.name.middle+character.name.last;
    if(curName === String(name)) return true;
  });

  if(!characterInfo) return <Error />;

  const { age, gender, homePlanet, occupation, species, sayings, images } = characterInfo[0];
  
  return (
    <Container>
      <Info>
        <ImageWrap>
          <img src={images.main} alt="" />
        </ImageWrap>
        <InfoWrap>
            <div>name: {name}</div>
            <div>age: {age}</div>            
            <div>gender: {gender}</div>
            <div>homePlanet: {homePlanet}</div>
            <div>occupation: {occupation}</div>
            <div>species: {species}</div>
        </InfoWrap>
      </Info>
      <Sayings>
        {sayings.map((say:string, index) => {
          return (
            <p key={`saying-${index}`}>{say}</p>
          )
        })}
      </Sayings>
    </Container>
  )
}

export default CharacterItem;

const Container = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${MEDIA_OPTIONS.mobile}) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: ${MEDIA_OPTIONS.mobile}) {
    flex-direction: row;
    justify-content: center;
  }
`

const Info = styled.div`
  display: flex;
`

const ImageWrap = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  & > img {
    object-fit: contain;
    width: 100%;
  }

  @media (max-width: ${MEDIA_OPTIONS.mobile}) {
    width: 100%;
    height: 50%;
  }
`

const InfoWrap = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  
  & > dl {
    & > dt {
    }
    & > dd {
      margin: 0;
    }
  }

  @media (max-width: ${MEDIA_OPTIONS.mobile}) {
    width: 100%;
    height: 50%;
  }
`

const Sayings = styled.div`
  
`