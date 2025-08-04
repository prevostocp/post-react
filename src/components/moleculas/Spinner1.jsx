import styled from "styled-components";
import { HashLoader } from "react-spinners"

export function Spinner1() {
  return (<Container>
    <HashLoader color="#7f3d6e" size={100} />
  </Container>);
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`