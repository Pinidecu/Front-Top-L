import React from "react";
import { Container, RigthContainer, StyledImg } from "./styles";

export default function BarraLogo() {
  return (
    <Container>
      <StyledImg
        width={80}
        height={20}
        source={require("../../../../assets/images/Logo.png")}
      />
      <RigthContainer>
        <StyledImg
          width={20}
          height={17}
          source={require("../../../../assets/images/AgendaNegra.png")}
        />
        <StyledImg
          width={15}
          height={16}
          source={require("../../../../assets/images/Mensaje.png")}
        />
        <StyledImg
          width={20}
          height={20}
          source={require("../../../../assets/images/Mas.png")}
        />
        <StyledImg
          width={15}
          height={16}
          source={require("../../../../assets/images/CampanaNegra.png")}
        />
      </RigthContainer>
    </Container>
  );
}
