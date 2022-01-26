import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  ancho: number;
  alto: number;
  texto: string;
  icon?: string;
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
  align-items: center;
  justify-content: center;
  margin: 5px 0px;
  width: ${(props) => props.width}%;
  height: ${(props) => props.height};
  border-radius: 8px;
  align-self: center;
`;

const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: Roboto;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  text-align: center;
`;

interface StyledImgProps {
  width: number;
  height: number;
  radio: any;
  margin: string;
  left: number;
}
const Icono = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default function BotonAzul({ ancho, alto, texto, icon }: Props) {
  return (
    <Container width={ancho} height={alto} color={Colors.colorBoton}>
      {icon ? <Icono width={33} height={30} source={{ uri: icon }} /> : null}
      <StyledText weight={400} size={16} lh={24} color={Colors.colorTextBoton}>
        {texto}
      </StyledText>
    </Container>
  );
}
