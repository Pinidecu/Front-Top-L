import React from "react";
import {  Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  texto: string;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const TextView = styled.View`
  flex-direction: row;
  margin: 10px;
  width: 100%;
  padding: 0px 10px;
  justify-content: space-between;
`;
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  align-self: center;
`;

export default function TextoGris({ texto }: Props) {
  return (
    <TextView>
      <StyledText
        size={12}
        weight={400}
        fs={"normal"}
        lh={14}
        color={Colors.textoGris}
      >
        {texto}
      </StyledText>
    </TextView>
  );
}