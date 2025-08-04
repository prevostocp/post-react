import styled from "styled-components";
import { Btn1, Title, Buscador } from "../../index"
import { v } from "../../styles/variables"

export function CategoriasTemplate() {
  return (<Container>
    <section className="area1">
      <Title>Categorias</Title>
      <Btn1 bgcolor={v.colorPrincipal} titulo="Nuevo" icono={<v.iconoagregar />} />
    </section>
    <section className="area2">
      <Buscador />
    </section>
    <section className="main">
      area3
    </section>
  </Container>);
}
const Container = styled.div`
  height: calc(100vh - 30px);
  padding: 15px;
  display: grid;
  grid-template:
  "area1" 60px
  "area2" 60px
  "main" auto;
  .area1 {
    grid-area: area1;
    background-color: rgba(103,93,241,0.14);
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
  }
  .area2 {
    grid-area: area2;
    background-color: rgba(7,237,45,0.14);
  }
  .main {
    grid-area: main;
    background-color: rgba(237,7,221,0.14);
  }
`