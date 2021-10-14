import React from "react";
import { StyleSheet, Text, View, Image, addons } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Icon } from "react-native-elements";

interface Props {
  titulo: string;
  icono: string;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${Colors.destacado};
  width: 347;
  height: 51px;
  margin: 2.5px 0;
  padding: 0 20px;
  border-radius: 8px;
  column-gap: 20px;
`;

const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

export default function Edicion({ titulo, icono }: Props) {
  return (
    <Container>
      <Icon
        name={icono}
        color={Colors.mainCOlorPurpleDark}
      />
      <StyledText
        size={14}
        weight={700}
        fs={"normal"}
        lh={18}
        color={Colors.mainCOlorPurpleDark}
      >
        {titulo}
      </StyledText>
    </Container>
  );
}
