import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { QuestionsData } from "../types"

export const Questions = ({data}: {data:QuestionsData[]}) => {

  const [select, setSelect] = useState<Array<string>>(Array(data.length).fill(0));
  const [quiz, setQuiz] = useState<QuestionsData>(data[0]);
  const leftButton = useRef<HTMLDivElement>(null);
  const rightButton = useRef<HTMLDivElement>(null);

  const Calculate = () => {
    let total = 0;
    select.forEach((check, idx) => {
      if(data[idx].correctAnswer === check) total++;
    })
    return total;
  };

  const handleSelectAnswer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextState = select.map((s, idx) => {
      if (idx === quiz.id-1) {
        return e.target.value;
      } else {
        return s;
      }
    })
    setSelect(nextState);
  }

  const handleLeftButton = useCallback(() => {
    const nextState = data[quiz.id-2];
    if(nextState.id <= 1) {
      (leftButton.current as HTMLDivElement).style.visibility = 'hidden';
    }
    setQuiz(nextState);
  }, [data, quiz]);

  const handleRightButton = useCallback(() => {
    const nextState = quiz.id < data.length ? data[quiz.id] : {...data[0], id: data.length+1};
    if(nextState.id > 1) {
      (leftButton.current as HTMLDivElement).style.visibility = 'visible';
    }
    setQuiz(nextState);
  }, [data, quiz]);

  useEffect(() => {
    (leftButton.current as HTMLDivElement)?.addEventListener("click", handleLeftButton);
    (rightButton.current as HTMLDivElement)?.addEventListener("click", handleRightButton);

    return () => {
      (leftButton.current as HTMLDivElement)?.removeEventListener("click", handleLeftButton);
      (rightButton.current as HTMLDivElement)?.removeEventListener("click", handleRightButton);
    }
  }, [handleLeftButton, handleRightButton]);

  return (
    <Container>
      {quiz.id <= data.length ? (
        <>
          <LeftButton ref={leftButton}>
            {`＜`}
          </LeftButton>
          <div>
          <p>#{quiz.id} / {data.length}</p>
          <p>Q. {quiz.question}</p>
            <SelectWrap>
              <select onChange={handleSelectAnswer} >
                {quiz.possibleAnswers.map((ans:string, index) => {
                  return (
                    <option 
                      key={`quiz-${index}`} 
                      value={quiz.correctAnswer}
                      >{ans}
                    </option>
                  )
                })}
              </select>
            </SelectWrap>
          </div>
          <RightButton ref={rightButton}>
            {`＞`}
          </RightButton>
        </>
      ) : (
        <div style={{background:"#fff"}}>
          {Calculate()}점 입니다!
        </div>
      )}
    </Container>
  )
}

const Container = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ebebeb;
`

const SelectWrap = styled.div`
  display: flex;
  justify-content: center;
  
  & > * {
    margin: 5px;
  }
`

const LeftButton = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    transform: scale(1.05);
  }
`

const RightButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    transform: scale(1.05);
  }
`