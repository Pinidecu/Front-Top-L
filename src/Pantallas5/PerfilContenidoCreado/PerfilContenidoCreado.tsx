import React from "react";
import BarraIconos from "../../Componentes/BarraIconos";
import InfoEducativa from "../../Componentes/InfoEducativa/InfoEducativa";
import PerfilInfo from "../../Componentes/PerfilInfo/PerfilInfo";
import { Container, Titulo, TextSubrayado } from "./styles";
import Colors from "../../../constants/Colors";
import PortadaAjuste from "./PortadaAjuste/PortadaAjuste";

export default function PerfilProEditar1() {
  return (
    <Container>
      <BarraIconos
        titulo={""}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        threePoints={true}
        add={true}
      />
      <PortadaAjuste/>
      <Titulo>Certificados profesionales</Titulo>
      <InfoEducativa
        nivel={"Pregrado"}
        area={"Psicología"}
        centro={"Universidad del Atlántico"}
        año={"1993.- 2021"}
        especializacion={"Ninguna"}
      />
      <TextSubrayado>Agregar otra formación</TextSubrayado>
    </Container>
  );
}
