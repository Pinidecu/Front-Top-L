import React from "react";
import BarraIconos from "../../Componentes/BarraIconos";
import InfoEducativa from "../../Componentes/InfoEducativa/InfoEducativa";
import { Container } from "./styles";
import Colors from "../../../constants/Colors";

export default function PerfilAjusteAsesoria() {
  return (
    <Container>
      <BarraIconos
        tituloAB={"Asesorías & Tarifas"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        threePoints={true}
        add={true}
      />
      <InfoEducativa
        area={"Educación Universitaria"}
        especializacion={"Física"}
        tiempo={"45 minutos"}
        valor={"$80.000"}
      />
      <InfoEducativa
        nivel={"Pregrado"}
        area={"Psicología"}
        centro={"Universidad del Atlántico"}
        año={"1993.- 2021"}
        especializacion={"Ninguna"}
      />
    </Container>
  );
}
