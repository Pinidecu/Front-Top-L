import React from "react";
import {  Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  titulo: string;
  icon?: string;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const Container = styled.View`
  margin: 5px 0px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${Colors.white};
  border-radius: 4px;
  height: 40px;
`;
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

export default function NewEquipoComp({ titulo, icon }: Props) {
  return (
    <Container>
      <StyledText
        size={14}
        weight={400}
        fs={"normal"}
        lh={16.8}
        color={Colors.mainColorBlack}
      >
        {titulo}
      </StyledText>

      {icon ? (
        <Icon name={icon} color={Colors.mainCOlorPurpleLigth} size={25} />
      ) : null}
    </Container>
  );
}
