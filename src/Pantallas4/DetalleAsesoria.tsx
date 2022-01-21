import React, { useState } from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import CajaBlanca from "../Componentes/CajaBlanca";
import BotonAzul from "../Componentes/BotonAzul";
import BarraIconos from "../Componentes/BarraIconos";
import BarraHistorial from "../Componentes/BarraHistorial";
import Boton from "../Componentes/Boton";
import Barra from "../Componentes/Barra/Barra";
import Explorar from "../Componentes/Explorar";
import NavLive from "../Componentes/NavLive";
import TextoGris from "../Componentes/TextoGris";
import { Datos1Props } from "../Componentes/CajaBlanca";
import Ficha from './HistorialAsesoria/Ficha'
import NewEquipoComp from "../Componentes/NewEquipo";
import PerfilProActive from "../Componentes/PerfilProActive";
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
interface StyledImgProps {
  width: number;
  height: number;
}
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
`;

const Datos1: Datos1Props = {
  ancho: 90,
  alto: 50,
  texto1: "texto 1",
  texto2: "texto 1",
  icon: true,
  icon2: false,
  icon3: false,
};

export default function DetalleAsesoria() {
  const [Status, setStatus] = useState("Documentos");

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