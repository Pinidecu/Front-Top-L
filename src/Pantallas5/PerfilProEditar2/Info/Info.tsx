import React from "react";
import {
  Container,
  TituloView,
  RigthView,
  StyledText,
  StyledImg,
} from "./styles";
import Colors from "../../../../constants/Colors";

interface Props {
  titulo: string;
  valor: string;
  moneda: string;
  tags: string;
}

export default function Info({ titulo, valor, moneda, tags }: Props) {
  return (
    <Container>
      <StyledImg
        width={40}
        height={40}
        source={require("../../../../assets/images/badge.png")}
      />
      <RigthView>
        <TituloView>
          <StyledText
            size={14}
            weight={400}
            fs={"italic"}
            lh={18}
            color={Colors.mainColorBlack}
          >
            {titulo}
          </StyledText>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {valor}
          </StyledText>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.mainColorBlack}
          >
            {moneda}
          </StyledText>
        </TituloView>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={14}
          color={Colors.SecondaryGray}
        >
          {tags}
        </StyledText>
      </RigthView>
    </Container>
  );
}
