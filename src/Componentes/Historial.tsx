import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Linea } from "../Pantallas/StyledComponents/StyledComponents";

interface Props {
  nombre: string;
  linea?: boolean;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-self: center;

  margin-top: 10px;
`;
const TextView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
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

const LineaView = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.bordeDestacado};
`;

export default function Historial({ nombre, linea }: Props) {
  return (
    <Container>
      <TextView>
        <StyledText
          size={16}
          weight={700}
          fs={"normal"}
          lh={24}
          color={Colors.mainColorBlack}
        >
          {nombre}
        </StyledText>
        <Icon
          name="chevron-right"
          color={Colors.mainCOlorPurpleLigth}
          size={30}
        />
      </TextView>
      {linea ? <LineaView /> : null}
    </Container>
  );
}
