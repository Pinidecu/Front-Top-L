import React from "react";
import { Text, View, Image, addons } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  icon1?: boolean;
  icon2?: boolean;
  icon3?: boolean;
  categoria: string;
  fecha: string;
  hora: string;
  peso: string;
}

const Container = styled.View`
  margin-left: 27px;
  justify-content: flex-start;
  align-content: left;  
  flex-direction: row;
  column-gap: 8px;
  margin-top: 25px;
`;
const NameContainer = styled.View`
  align-items: left;
  margin-bottom: 15px;
  row-gap: 8px;
`;
export const TextContainer = styled.View`
  width: 90%;
  align-self: center;
  padding: 17px 10px;
`;
export const BottomContainer = styled.View`
  align-items: center; 
`;
interface StyledTextProps {
  size: number;
  weight: number;
  color: string;
  lh: number;
}
const DocCont = styled.View`
  background-color:  ${Colors.white};
  width: 113.37px;
  height: 113.37px;
  justify-content: center;
  align-items:center;
  border-radius: 8px;
`
const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: ProximaNova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
`;
const TextoCont = styled.View`
  justify-items: left;
  flex-direction: row;
  row-gap: 2px;
`
interface StyledImgProps {
  width: number;
  height: number;
}

const Icono = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export default function DescripDoc({icon1, icon2, icon3, categoria, fecha, hora, peso}: Props) {
  return (
      <Container>
      <DocCont>
      {icon1 ?
        <Icono
        width={36.65}
        height={49}
        source={require("../../assets/images/PDFDoc.png")} /> : null}
      {icon2 ?
        <Icono
        width={36.65}
        height={49}
        source={require("../../assets/images/VideoDoc.png")} /> : null}
      {icon3 ?
        <Icono
        width={36.65}
        height={49}
        source={require("../../assets/images/WordDoc.png")} /> : null}
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
