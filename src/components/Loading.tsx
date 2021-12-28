import styled from "@emotion/styled"

export const Loading = () => {
  return (
    <Container>
      로딩 중입니다 ...
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`