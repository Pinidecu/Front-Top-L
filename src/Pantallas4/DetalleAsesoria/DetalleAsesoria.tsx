import React, { useState } from "react";
import Colors from "../../../constants/Colors";
import BarraIconos from "../../Componentes/BarraIconos";
import BarraHistorial from "./BarraHistorial/BarraHistorial";
import Ficha from '../ComponentesDetalleAsesoría/Ficha/Ficha'
import Recomendacion from "../ComponentesDetalleAsesoría/Recomendacion/Recomendacion";
import Documentos from "../ComponentesDetalleAsesoría/Documentos/Documentos";
import Historial from "../ComponentesDetalleAsesoría/Historial/Historial";
import PerfilAgenda from "./PerfilAgenda/PerfilAgenda";
import { Container } from "./styles";

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