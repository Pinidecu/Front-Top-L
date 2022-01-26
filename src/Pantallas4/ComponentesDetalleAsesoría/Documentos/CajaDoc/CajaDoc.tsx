import React from "react";
import Colors from "../../../../../constants/Colors";
import { Container, DocCont, Icono, StyledText, TextoCont } from "./styles";

interface Props {
  texto1: string;
  texto2: string;
  icon1?: boolean;
  icon2?: boolean;
  icon3?: boolean;
}

export default function CajaDoc({ texto1, texto2, icon1, icon2, icon3 }: Props) {
  return (
    <Container color={Colors.SecondaryPurpleLight}>
      <DocCont>
      {icon1 ?
        <Icono
        width={36.65}
        height={49}
        source={require("../../../../../assets/images/PDFDoc.png")} /> : null}
      {icon2 ?
        <Icono
        width={36.65}
        height={49}
        source={require("../../../../../assets/images/VideoDoc.png")} /> : null}
      {icon3 ?
        <Icono
        width={36.65}
        height={49}
        source={require("../../../../../assets/images/WordDoc.png")} /> : null}
      </DocCont>
      <TextoCont>
        <StyledText
          weight={400}
          size={12}
          lh={14}
          color={Colors.black}
        >
          {texto1}
        </StyledText>
        <StyledText
        weight={700}
        size={12}
        lh={14}
        color={Colors.SecondaryGray}
        >
          {texto2}
        </StyledText>
      </TextoCont>      
    </Container>
  );
}
