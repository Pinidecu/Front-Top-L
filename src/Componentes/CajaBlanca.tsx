import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  ancho: number;
  alto: number;
  texto1: string;
  texto2: string;
  icon?: boolean;
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
  flex-direction: row;
  background-color: ${(props) => props.color};
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: ${(props) => props.width}%;
  height: ${(props) => props.height};
  border-radius: 4px;
  align-self: center;
  margin: 2%;
`;
const LeftContainer = styled.View`
  flex-direction: column;
`
const BarraCont = styled.View`
  justify-items: center;
`

const CandContainer = styled.View`
  flex-direction: row;
  column-gap: 5px;
  align-items: center;
`
const Descripcion = styled.Text<StyledTextProps>`  
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  text-align: left;
  position: top;
`

const Datos = styled.Text<StyledTextProps>`
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

export default function CajaBlanca({ ancho, alto, texto1, texto2, icon, icon2, icon3 }: Props) {
  return (
    <Container width={ancho} height={alto} color={Colors.white}>
      <LeftContainer>
      <Descripcion 
        weight={700} 
        size={12}
        lh={14} 
        color={Colors.SecondaryGray}
      >
      {texto1}
      </Descripcion>
      <CandContainer>
      <Datos 
        weight={400} 
        size={16} 
        lh={24} 
        color={Colors.mainColorBlack} 
      >
      {texto2}
      </Datos>
      {icon2 ? 
        <Icono 
          width={13} 
          height={13}
          source={require("../../assets/images/candado.png")} /> : null}
      </CandContainer>
      <BarraCont>
      {icon3 ? 
        <Icono 
          width={320} 
          height={29}
          source={require("../../assets/images/Group 133.png")} /> : null}
      </BarraCont>
      </LeftContainer>          
      {icon ? 
        <Icono 
          width={33} 
          height={30}
          source={require("../../assets/images/arrow.png")} /> : null}
    </Container>
  );
}
