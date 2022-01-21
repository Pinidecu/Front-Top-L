import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  texto1: string;
  texto2: string;
  icon1?: boolean;
  icon2?: boolean;
  icon3?: boolean;
}

interface ContainerProps {
  color: string;
  width: number;
  height: number;
}

interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
}

const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.color};
  row-gap: 5px;
  justify-content: center;
  padding: 6px 14px;
  width:
  height: 
  border-radius: 4px;
  align-self: center;
`;


const DocCont = styled.View`
  background-color:  ${Colors.white};
  justify-items: center;
  align-items:center;
`

const TextoCont = styled.View`
  justify-items: left;
  margin-top: 8px;
  row-gap: 10px;
`

const StyledText = styled.Text<StyledTextProps>`  
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  text-align: left;
`

interface StyledImgProps {
  width: number;
  height: number;
}

const Icono = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default function CajaFicha({ texto1, texto2, icon1, icon2, icon3 }: Props) {
  return (
    <Container width={ancho} height={alto} color={Colors.SecondaryPurpleLight}>
      <StyledText
        weight={700}
        size={16}
        lh={24}
        color={Colors.mainColorBlack}
      >
        Documentos recientes
      </StyledText>
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
      <TextoCont>
        <StyledText
          weight={400}
          size={14}
          lh={16.8}
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