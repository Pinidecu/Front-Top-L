import React from "react";
import Colors from "../../../../constants/Colors";
import { Container, DocCont, Icono, NameContainer, StyledText, TextoCont } from "./styles";

interface Props {
  icon1?: boolean;
  icon2?: boolean;
  icon3?: boolean;
  categoria: string;
  fecha: string;
  hora: string;
  peso: string;
}

export default function DescripDoc({icon1, icon2, icon3, categoria, fecha, hora, peso}: Props) {
  return (
      <Container>
      <DocCont>
      {icon1 ?
        <Icono
        width={36.65}
        height={49}
        source={require("../../../../assets/images/PDFDoc.png")} /> : null}
      {icon2 ?
        <Icono
        width={36.65}
        height={49}
        source={require("../../../../assets/images/VideoDoc.png")} /> : null}
      {icon3 ?
        <Icono
        width={36.65}
        height={49}
        source={require("../../../../assets/images/WordDoc.png")} /> : null}
      </DocCont>
        <NameContainer>
          <StyledText
            weight={700}
            size={16}
            lh={24}
            color={Colors.mainColorBlack}
          >
            Rutina ejercicios 1
          </StyledText>
          <TextoCont>
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            Categoría:
          </StyledText>
          <StyledText
            weight={400}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {categoria}
          </StyledText>
        </TextoCont>
        <TextoCont>
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            Fecha de asesoría:
          </StyledText>
          <StyledText
            weight={400}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {fecha}
          </StyledText>
        </TextoCont>
        <TextoCont>
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            Hora:
          </StyledText>
          <StyledText
            weight={400}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {hora}
          </StyledText>
        </TextoCont>
        <TextoCont>
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            Peso:
          </StyledText>
          <StyledText
            weight={400}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {peso}
          </StyledText>
        </TextoCont>
        </NameContainer>
      </Container>
  );
}
