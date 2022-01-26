import React from "react";
import { Container, ContainerImg, StyledImg, StyledText } from "./styles";

interface Props {
  nombre: string;
  foto: string;
  color: string;
  colorText: string;
}

export default function ComponenteBarra({
  nombre,
  foto,
  color,
  colorText,
}: Props) {
  return (
    <Container color={color}>
      <ContainerImg>
        <StyledImg
          width={25}
          height={25}
          resizeMode={"contain"}
          source={{
            uri: foto,
          }}
        />
        <StyledText weight={400} size={12} lh={14} color={colorText}>
          {nombre}
        </StyledText>
      </ContainerImg>
    </Container>
  );
}
