import React from "react";
import { Container, ContainerImg, MuteView, StyledImg, StyledText } from "./styles";

interface Props {
  nombre: string;
  activo: boolean;
  foto: string;
  mute: boolean;
}

export default function ParticipanteSala3({
  nombre,
  activo,
  foto,
  mute,
}: Props) {
  console.log(foto);
  return (
    <Container>
      {mute ? (
        <MuteView>
          <StyledImg
            width={35}
            height={35}
            radio={"50%"}
            source={require("../../../../assets/images/mute.png")}
          />
        </MuteView>
      ) : null}
      <ContainerImg activo={activo} foto={foto} />
      <StyledText>{nombre}</StyledText>
    </Container>
  );
}
