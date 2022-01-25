import React from "react";
import {
  Container,
  LeftContainer,
  StyledImg,
  Subrayado,
  Titulo,
} from "./styles";

export default function OpcionesInicio() {
  return (
    <Container>
      <LeftContainer>
        <StyledImg
          width={14}
          height={14}
          source={require("../../../../assets/images/check.png")}
        />
        <Titulo>Recordarme</Titulo>
      </LeftContainer>
      <Subrayado>Olvidé mi contraseña</Subrayado>
    </Container>
  );
}
