import React from "react";
import Colors from "../../../../constants/Colors";
import { Container, NameContainer, StyledImg, StyledText, TextoCont, TopContainer } from "./styles";

interface Props {
  name: string;
  user: string;
  categoria: string;
  fecha: string;
  hora: string;
  tiempo: string;
}

export default function PerfilAgenda({ name, user, categoria, fecha, hora, tiempo }: Props) {
  return(
    <Container>
      <TopContainer>
        <StyledImg
          width={40}
          height={40}
          radio={50}
          source={require("../../../../assets/images/Sala/9.png")}
        />
        <NameContainer>
          <StyledText
            weight={700}
            size={16}
            lh={24}
            color={Colors.mainColorBlack}
          >
            {name}
          </StyledText>
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.SecondaryGray}
          >
            {user}
          </StyledText>
        </NameContainer>
      </TopContainer>
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
            Tiempo:
          </StyledText>
          <StyledText
            weight={400}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {tiempo}
          </StyledText>
        </TextoCont>
    </Container>
  );
}
