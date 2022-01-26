import React from "react";
import Colors from "../../../../constants/Colors";
import ComponenteBarra from "./ComponenteBarra/ComponenteBarra";
import FPA from "../../../../assets/images/Barra/FichaPerA.png";
import FPB from "../../../../assets/images/Barra/FichaPerB.png";
import RecA from "../../../../assets/images/Barra/RecomendA.png";
import RecB from "../../../../assets/images/Barra/RecomendB.png";
import DocA from "../../../../assets/images/Barra/DocumA.png";
import DocB from "../../../../assets/images/Barra/DocumB.png";
import HistA from "../../../../assets/images/Barra/HistorialA.png";
import HistB from "../../../../assets/images/Barra/HistorialB.png";
import { Barra, Container, Linea } from "./styles";

interface Props {
  estado: string;
}
export default function BarraHistorial({ estado }: Props) {
  return (
    <Container>
      <Linea />
      <Barra>
        {estado === "Ficha Personal" ? (
          <ComponenteBarra
            nombre={"Ficha Personal"}
            foto={FPB}
            color={Colors.mainCOlorPurpleDark}
            colorText={Colors.white}
          />
        ) : (
          <ComponenteBarra
            nombre={"Ficha Personal"}
            foto={FPA}
            color={Colors.SecondaryPurpleLight}
            colorText={Colors.mainCOlorPurpleLigth}
          />
        )}
        {estado === "Recomendaciones" ? (
          <ComponenteBarra
            nombre={"Recomendaciones"}
            foto={RecB}
            color={Colors.mainCOlorPurpleDark}
            colorText={Colors.white}
          />
        ) : (
          <ComponenteBarra
            nombre={"Recomendaciones"}
            foto={RecA}
            color={Colors.SecondaryPurpleLight}
            colorText={Colors.mainCOlorPurpleLigth}
          />
        )}
        {estado === "Documentos" ? (
          <ComponenteBarra
            nombre={"Documentos"}
            foto={DocB}
            color={Colors.mainCOlorPurpleDark}
            colorText={Colors.white}
          />
        ) : (
          <ComponenteBarra
            nombre={"Documentos"}
            foto={DocA}
            color={Colors.SecondaryPurpleLight}
            colorText={Colors.mainCOlorPurpleLigth}
          />
        )}
        {estado === "Historial" ? (
          <ComponenteBarra
            nombre={estado}
            foto={HistB}
            color={Colors.mainCOlorPurpleDark}
            colorText={Colors.white}
          />
        ) : (
          <ComponenteBarra
            nombre={"Historial"}
            foto={HistA}
            color={Colors.SecondaryPurpleLight}
            colorText={Colors.mainCOlorPurpleLigth}
          />
        )}
      </Barra>
    </Container>
  );
}
