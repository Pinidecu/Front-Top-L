import React from "react";
import Colors from "../../../../constants/Colors";
import { Container, LeftContainer, StyledImg, StyledText } from "./styles";

export default function PerfilSalaDetalle3() {
  return (
    <Container>
      <LeftContainer>
        <StyledText
          size={16}
          weight={700}
          fs={"normal"}
          lh={20}
          color={Colors.mainColorBlack}
        >
          El Yoga como filosofia de vida y harmonía con el universo para ti,
          para mí y para todos! Aeroyogabaq
        </StyledText>
      </LeftContainer>
      <StyledImg
        width={40}
        height={40}
        radio={"50%"}
        source={require("../../../assets/images/AddCall.png")}
      />
    </Container>
  );
}
