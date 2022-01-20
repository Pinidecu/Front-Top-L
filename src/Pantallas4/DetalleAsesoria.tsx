import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import CajaBlanca from "../Componentes/CajaBlanca";
import BotonAzul from "../Componentes/BotonAzul";
import BarraIconos from "../Componentes/BarraIconos";


export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  row-gap: 14px;
  width: 100%;
  background-color: ${Colors.SecondaryPurpleLight};
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
`

export default function DetalleAsesoria() {
  return (
    <Container>
      <BarraIconos
        titulo={"Historial Asesoría"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        add={true}
      />
      {/*PerfilAgenda*/}
      
    </Container>
  );
}