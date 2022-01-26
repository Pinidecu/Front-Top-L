import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraIconos from "../Componentes/BarraIconos";
import CajaArea from "../Componentes/CajaArea";


export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  row-gap: 14px;
  width: 100%;
  background-color: ${Colors.white};
`
interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
  sub?: boolean;
}

export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova; 
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

export const TextContainer = styled.View`
  width: 90%;
  align-self: left;
  margin-top: 30px;
`;

export default function AreaProf() {
  return (
    <Container>
      <BarraIconos
        titulo={"Área profesional"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        add={true}
        campana={true}
      />
      <TextContainer>
        <StyledText
          size={14}
          weight={400}
          fs={"normal"}
          lh={18}
          color={Colors.SecondaryGray}
        >
          Selecciona un área profesional
        </StyledText>
      </TextContainer>
      <CajaArea
        texto={"Artes plásticas"}
        icon1={true}
      />
      <CajaArea
        texto={"Derecho"}
        icon2={true}
      />
      <CajaArea
        texto={"Desarrollo"}
        icon2={true}
      />
      <CajaArea
        texto={"Diseño"}
        icon2={true}
      />
      <CajaArea
        texto={"Salud"}
        icon2={true}
      />
      <CajaArea
      texto={"Administración"}
      icon2={true}
      />
      <CajaArea
      texto={"Diseño"}
      icon2={true}
      />
      <CajaArea
      texto={"Marketing"}
      icon2={true}
      />
    </Container>
  );
}