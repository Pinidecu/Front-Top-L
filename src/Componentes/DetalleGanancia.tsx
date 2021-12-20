import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Linea } from "../Pantallas/StyledComponents/StyledComponents";

interface Props {
  fecha: string;
  ID: string;
  valor: string;
  estado: string;
  indicador: string;
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

const Estado = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LineaView = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.bordeDestacado};
`;

interface PuntoProps {
  color: string;
}
const Punto = styled.View<PuntoProps>`
  background-color: ${(props) => props.color};
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

export default function DetalleGanancia({
  fecha,
  ID,
  valor,
  estado,
  indicador,
}: Props) {
  return (
    <Container>
      <LineaView />
      <TextView>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={18}
          color={Colors.SecondaryGray}
        >
          {fecha}
        </StyledText>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={18}
          color={Colors.SecondaryGray}
        >
          {ID}
        </StyledText>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={18}
          color={Colors.mainCOlorPurpleLigth}
        >
          {valor}
        </StyledText>
        <Estado>
          <Punto color={indicador}></Punto>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.SecondaryGray}
          >
            {estado}
          </StyledText>
        </Estado>
      </TextView>
    </Container>
  );
}
