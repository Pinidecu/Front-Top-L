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
  width: 112px;
  height: 166px;
`;


const DocCont = styled.View`
  background-color:  ${Colors.white};
  width: 113.37px;
  height: 113.37px;
  justify-content: center;
  align-items:center;
  border-radius: 8px;
`

const TextoCont = styled.View`
  justify-items: left;
  row-gap: 2px;
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
    <Container color={Colors.SecondaryPurpleLight}>
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
