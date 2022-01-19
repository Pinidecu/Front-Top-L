import React from "react";
import {
  Container,
  StyledImg,
  Titulo,
} from "./styles";


export default function PortadaAjuste() {
  return (
    <Container>
      <StyledImg
        width={40}
        height={40}
        source={require("../../../../assets/images/userGris.png")}
      />
      <Titulo>Ajustes del perfil</Titulo>
    </Container>
  );
}
