import styled from "styled-components";
import { v } from "../../styles/variables"

export function Buscador() {
  return (<Container>
    <section className="content" >
        <v.iconobuscar className="icono" />
        <input placeholder="...Buscar" />
    </section>
  </Container>);
}
const Container =styled.div`
  border-radius: 10px;
  height: 60px;
  align-items: center;
  display: flex;
  color: ${({theme}) => theme.text};
  border: 2px solid ${({theme}) => theme.color2};
  .content {
    padding: 15px;
    gap: 10px;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    .icono {
        font-size: 18px;
        
    }
  }
`