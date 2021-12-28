import styled from "@emotion/styled";
import { MEDIA_OPTIONS } from "../constant";
import { CharacterData } from "../types";
import { useEffect, useRef } from "react";
import Router from "next/router";

export const Characters = ({data}: {data:CharacterData[]}) => {

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (container.current as HTMLDivElement).addEventListener("click", handleClickCharacter)
    return () => {
      (container.current as HTMLDivElement)?.removeEventListener("click", handleClickCharacter);
    }
  }, [data])

  const handleClickCharacter = (e:MouseEvent) => {
    const item = (e.target as Element).closest(".character");
    if(item) {
      const name = (item.querySelector(".character-name") as HTMLDivElement).textContent?.split(" ").join("");
      Router.push(`/character/${name}`);
    }
  }

  return (
    <Container ref={container}>
      {data.map((character:CharacterData) => {
        return (
          <Character key={`character-${character.id}`} className="character">
            <div>
              <img src={character.images.main} alt={`this image is ${character.name} character`} />
            </div>
            <NameWrap className="character-name">{character.name.first} {character.name.middle} {character.name.last}</NameWrap>
          </Character>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
  align-items: center;

  @media (min-width: ${MEDIA_OPTIONS.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: ${MEDIA_OPTIONS.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${MEDIA_OPTIONS.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  &>div {
    cursor: pointer;
  }
`

const Character = styled.div`
  &:hover {
    transform: scale(1.03);
  }
`

const NameWrap = styled.div`
  text-align: center;

`