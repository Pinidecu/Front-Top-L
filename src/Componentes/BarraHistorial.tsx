import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import ComponenteBarra from "./ComponenteBarra";
import FPA from "../../assets/images/Barra/FichaPerA.png";
import FPB from "../../assets/images/Barra/FichaPerB.png";
import RecA from "../../assets/images/Barra/RecomendA.png";
import RecB from "../../assets/images/Barra/RecomendB.png";
import DocA from "../../assets/images/Barra/DocumA.png";
import DocB from "../../assets/images/Barra/DocumB.png";
import HistA from "../../assets/images/Barra/HistorialA.png";
import HistB from "../../assets/images/Barra/HistorialB.png";

const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Barra = styled.View`
  width: 100%;
  flex-direction: row;
`;

const RigthContainer = styled.View`
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

interface StyledImgProps {
  width: number;
  height: number;
}
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const Linea = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${Colors.mainCOlorPurpleDark};
`;

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
            estado={estado}
            foto={FPB}
            color={Colors.mainCOlorPurpleDark}
          />
        ) : (
          <ComponenteBarra
            estado={estado}
            foto={FPA}
            color={Colors.SecondaryPurpleLight}
          />
        )}
        {estado === "Recomendaciones" ? (
          <ComponenteBarra
            estado={estado}
            foto={RecB}
            color={Colors.mainCOlorPurpleDark}
          />
        ) : (
          <ComponenteBarra
            estado={estado}
            foto={RecA}
            color={Colors.SecondaryPurpleLight}
          />
        )}
        {estado === "Documentos" ? (
          <ComponenteBarra
            estado={estado}
            foto={DocB}
            color={Colors.mainCOlorPurpleDark}
          />
        ) : (
          <ComponenteBarra
            estado={estado}
            foto={DocA}
            color={Colors.SecondaryPurpleLight}
          />
        )}
        {estado === "Historial" ? (
          <ComponenteBarra
            estado={estado}
            foto={HistB}
            color={Colors.mainCOlorPurpleDark}
          />
        ) : (
          <ComponenteBarra
            estado={estado}
            foto={HistA}
            color={Colors.SecondaryPurpleLight}
          />
        )}
      </Barra>
    </Container>
  );
}
