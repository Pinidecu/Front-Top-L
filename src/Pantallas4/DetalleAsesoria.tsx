import React, { useState } from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraIconos from "../Componentes/BarraIconos";
import BarraHistorial from "../Componentes/BarraHistorial";
import Ficha from './HistorialAsesoria/Ficha'
import Notificaciones from "../Pantallas2/Notificaciones/Notificaciones";
import Recomendacion from "./HistorialAsesoria/Recomendacion";
import Documentos from "./HistorialAsesoria/Documentos";
import Historial from "./HistorialAsesoria/Historial";
import PerfilAgenda from "../Componentes/PerfilAgenda";


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
  const [Status, setStatus] = useState("Historial");

  return (
    <Container>
      <BarraIconos
        titulo={"Historial Asesoría"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        add={true}
      />
      <PerfilAgenda
        name={"Antony Ruiz"}
        user={"@anruizp"} 
        categoria={" Yoga • Meditación holística"} 
        fecha={" 18/11/2021"}
        hora={" 4:00PM"}
        tiempo={" 45 minutos"}
      />
      <BarraHistorial estado={Status} />
      {Status === "Ficha Personal" ? <Ficha /> : null}
      {Status === "Recomendaciones" ? <Recomendacion />  : null}
      {Status === "Documentos" ? <Documentos /> : null}
      {Status === "Historial" ? <Historial /> : null}
    </Container>
  );
}