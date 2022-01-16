import React from "react";
import { Container, Titulo, Texto } from "./styles";
import Portada from "./Portada/Portada";
import PerfilInfo from "./PerfilInfo/PerfilInfo";
import Info from "./Info/Info";

const texto =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada fringilla metus at tincidunt. Proin nec massa nec arcu efficitur fermentum. Fusce imperdiet feugiat felis, in ullamcorper quam accumsan ac. Maecenas quis neque sed velit hendrerit facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a consequat dui, non consectetur justo.";

export default function PerfilProEditar2() {
  return (
    <Container>
      <Portada />
      <PerfilInfo
        nombre={"Alejandra Martinez"}
        profesion={"Instructora de yoga"}
        estrellas={"4.5"}
        reviews={"128"}
      />
      <Titulo>Descripción de mi perfil</Titulo>
      <Texto>{texto}</Texto>
      <Info
        titulo={"Consulta yoga principiante"}
        valor={"$80.000"}
        moneda={"COP"}
        tags={"Yoga  • Vinyasa Yoga"}
      />
    </Container>
  );
}
