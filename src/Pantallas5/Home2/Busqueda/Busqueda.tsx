import React, { useState } from "react";
import { Container, StyledImg, Titulo } from "./styles";

interface Props {
  texto: string;
}

export default function Busqueda({ texto }: Props) {
  return (
    <Container>
      <StyledImg
        width={20}
        height={20}
        source={require("../../../../assets/images/Lupa.png")}
      />
      <Titulo>{texto}</Titulo>
    </Container>
  );
}
