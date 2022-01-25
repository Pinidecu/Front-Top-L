import React, { useState } from "react";
import { Container, Titulo } from "./styles";

interface Props {
  nombre: string;
}

export default function Input({nombre}: Props) {
  

  return (
    <Container>
        <Titulo>{nombre}</Titulo>
    </Container>
  );
}
