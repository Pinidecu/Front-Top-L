import React from "react";
import { Container, ContainerImg, StyledImg } from "./styles";

interface Props {
  estado: string;
  foto: string;
  color: string;
}

export default function ComponenteBarra({ estado, foto, color }: Props) {
  return (
    <Container color={color}>
      <ContainerImg>
        {estado === "Ficha Personal" ? (
          <StyledImg
            width={100}
            height={100}
            source={{
              uri: foto,
            }}
          />
        ) : (
          <StyledImg
            width={100}
            height={100}
            source={{
              uri: foto,
            }}
          />
        )}
      </ContainerImg>
    </Container>
  );
}
