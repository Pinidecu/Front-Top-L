import React from "react";
import BarraIconos from "../../Componentes/BarraIconos";
import Colors from "../../../constants/Colors";
import {
  Container,
  ContainerScroll,
  StyledText,
  ViewHistorial,
} from "./styles";
import Portada from "./Portada/Portada";
import Historial from "./Historial/Historial";

export default function AgendaHistorialAsesoria() {
  return (
    <ContainerScroll>
      <Container>
        <BarraIconos
          tituloAB={"Mi Historial Live"}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          add={true}
          campanaSola={true}
        />
        <Portada />
        <ViewHistorial>
          <Historial nombre="Asesorías recibidas" linea={true} />
          <Historial nombre="Eventos asistidos" linea={true} />
          <Historial nombre="Publicaciones" linea={true} />
          <Historial nombre="Reviews" linea={true} />
          <Historial nombre="Denuncias" linea={true} />
        </ViewHistorial>
      </Container>
    </ContainerScroll>
  );
}
