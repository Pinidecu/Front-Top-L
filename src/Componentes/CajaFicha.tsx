import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  ancho: number;
  alto: number;
  fecha: string;
  texto1: string;
  texto2: string;
  texto3?: string;
  icon?: boolean;
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
  width: ${(props) => props.width}%;
  height: ${(props) => props.height};
  border-radius: 4px;
  align-self: center;
`;

const TextoCont = styled.View`
  justify-items: left;
  margin-top: 8px;
  row-gap: 10px;
`

const BarraCont = styled.View`
  justify-items: left;
  flex-direction: row;
  column-gap: 7px;
  padding:1%;
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

export default function CajaHist({ ancho, alto, fecha, texto1, texto2, texto3, icon }: Props) {
  return (
    <Container width={ancho} height={alto} color={Colors.white}>
      <StyledText
        weight={400}
        size={14}
        lh={16.8}
        color={Colors.SecondaryGray}
      >
        {fecha}
      </StyledText>
      <StyledText
        weight={700}
        size={12}
        lh={14}
        color={Colors.SecondaryGray}
      >
        {texto1}
      </StyledText>
      <TextoCont>
        <StyledText
          weight={400}
          size={14}
          lh={16.8}
          color={Colors.black}
        >
          {texto2}
        </StyledText>
        
        {texto3 ?
          <StyledText
            weight={400}
            size={14}
            lh={16.8}
            color={Colors.black} >
            {texto3}
          </StyledText>
          : null}
      </TextoCont>
      {icon ?
        <BarraCont>
          <Icono
            width={25}
            height={15}
            source={require("../../assets/images/SF.png")} />
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.SecondaryGray}>
            {'Información exclusiva para el profesional'}
          </StyledText>
        </BarraCont> : null}
    </Container>
  );
}
