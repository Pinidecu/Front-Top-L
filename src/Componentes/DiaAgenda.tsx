import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  ancho: number;
  alto: number;
  texto: string;
  icon: string;
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
  justify-content: space-between;
  column-gap: 10;
  width: ${(props) => props.width}%;
  height: ${(props) => props.height};
  border-radius: 8;
  padding: 0px 10px;
  margin: 5px;
`;

const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: Roboto;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
`;



export default function DiaAgenda({ ancho, alto, texto, icon }: Props) {
  return (
    <Container width={ancho} height={alto} color={Colors.colorBoton}>
      <StyledText weight={700} size={14} lh={29} color={Colors.white}>
        {texto}
      </StyledText>
      {icon ? (
        <Icon
          name={icon}
          color="white"
          size={35}
          onPress={() => console.log("hello")}
        />
      ) : null}
    </Container>
  );
}
