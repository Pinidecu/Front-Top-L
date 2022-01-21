import React, { useState } from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraIconos from "../Componentes/BarraIconos";
import BarraHistorial from "../Componentes/BarraHistorial";
import TextoGris from "../Componentes/TextoGris";
import Ficha from './HistorialAsesoria/Ficha'
import NewEquipoComp from "../Componentes/NewEquipo";
import Notificaciones from "../Pantallas2/Notificaciones/Notificaciones";

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
  const [Status, setStatus] = useState("Ficha Personal");

  return (
    <Container>
      <BarraIconos
        titulo={"Historial Asesoría"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        add={true}
      />
      {/*PerfilAgenda*/}

      <BarraHistorial estado={Status} />
      {Status === "Ficha Personal" ? <Ficha /> : null}
      {Status === "Recomendaciones" ? (
        <NewEquipoComp
          titulo={"Nombre del equipo"}
          descripcion={"VideoMarketing"}
        />
      ) : null}
      {Status === "Documentos" ? <Notificaciones /> : null}
      {Status === "Historial" ? <TextoGris texto={"Historial"} /> : null}
    </Container>
  );
}