import React from "react";
import InfoEducativa from "../../Componentes/InfoEducativa/InfoEducativa";
import PerfilInfo from "../../Componentes/PerfilInfo/PerfilInfo";
import Portada from "../../Componentes/Portada/Portada";
import { Container, Titulo, TextSubrayado } from "./styles";

export default function PerfilProEditar1() {
  return (
    <Container>
      <Portada />
      <PerfilInfo
        nombre={"Alejandra Martinez"}
        profesion={"Instructora de yoga"}
        estrellas={"4.5"}
        reviews={"128"}
      />
      <Titulo>Idiomas profesionales</Titulo>
      <InfoEducativa
        nivel={"B2"}
        area={"Inglés profesional"}
        centro={"Universidad del Atlántico"}
        año={"2016"}
      />
      <TextSubrayado>Agregar otra formación</TextSubrayado>
    </Container>
  );
}
