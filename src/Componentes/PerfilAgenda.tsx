import React from "react";
import { Text, View, Image, addons } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  name: string;
  user: string;
  categoria: string;
  fecha: string;
  hora: string;
  tiempo: string;
}

const Container = styled.View`
  width: 100%;
`;

const TopContainer = styled.View`
  margin-left: 27px;
  justify-content: flex-start;
  align-content: left;  
  flex-direction: row;
  column-gap: 8px;
`;

const NameContainer = styled.View`
  align-items: left;
  margin-bottom: 15px;
`;

const TextoCont = styled.View`
  flex-direction: row;
  margin-left: 75px;
  justify-items: left;
  padding: 2px;
`
interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
}

const StyledText = styled.Text<StyledTextProps>`  
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  text-align: left;
`
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
`;
export default function PerfilAgenda({ name, user, categoria, fecha, hora, tiempo }: Props) {
  return(
    <Container>
      <TopContainer>
        <StyledImg
          width={40}
          height={40}
          radio={"50%"}
          source={require("../../assets/images/Sala/9.png")}
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
