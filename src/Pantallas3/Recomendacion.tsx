import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraP3 from "../Componentes/BarraP3";
import CajaBlanca from "../Componentes/CajaBlanca";
import BotonAzul from "../Componentes/BotonAzul";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  row-gap: 14px;
  width: 100%;
  background-color: ${Colors.SecondaryPurpleLight};
  
`;
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
  ${({ sub }) =>
    sub &&
    `    
  text-decoration: underline ${Colors.mainCOlorPurpleLigth};
  `}
`;
export const RecomendacionView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  padding: 2%;
  background-color: ${Colors.SecondaryPurpleLight};
  justify-content: space-between;
`;

export default function Recomendacion() {
  return (
    <Container>
      <BarraP3 />
      <RecomendacionView>
        <StyledText
            size={20}
            weight={400}
            fs={"normal"}
            lh={24}
            color={Colors.black}
          >
            Camila, que tipo de recomendación top necesitas?
          </StyledText>
      </RecomendacionView>
      <CajaBlanca
              ancho={90}
              alto={60}
              texto1={"Tema de interés"}
              texto2={"Seleccionar"}
              icon={true}
              icon2={""}
      />
      <CajaBlanca
              ancho={90}
              alto={60}
              texto1={"Título de la publicación"}
              texto2={"    "}
              icon={""}
              icon2={""}
      />
      <CajaBlanca
              ancho={90}
              alto={60}
              texto1={"Privacidad"}
              texto2={"Mi comunidad"}
              icon={true}
              icon2={true}
      />
      <CajaBlanca
              ancho={90}
              alto={60}
              texto1={"Filtros"}
              texto2={"#filter, #filter, #filter"}
              icon={true}
              icon2={""}
      />
      <BotonAzul
       ancho={90}
       alto={55.08}
       texto={"PUBLICAR EN COMUNIDAD"}
       icon={""}
      />
    </Container>
  );
}
