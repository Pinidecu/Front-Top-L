import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import CajaFicha from "../../Componentes/CajaFicha";

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
      <CajaFicha
              ancho={90}
              alto={80}
              fecha={"03/10/2022"}
              texto1={"Nombre completo"}
              texto2={"Morbi tincidunt metus quis justo lobortis tristique."}
              texto3={""}
      />
      <CajaFicha
             ancho={90}
             alto={74}
             fecha={"03/10/2022"}
             texto1={"Edad"}
             texto2={"28 años"}
             texto3={""}
      />
      <CajaFicha
              ancho={90}
              alto={76}
              fecha={"03/10/2022"}
              texto1={"Tipo de marca"}
              texto2={"Marca de cosmeticos venta en colombia"}
              texto3={""}
      />
      <CajaFicha
              ancho={90}
              alto={126}
              fecha={"03/10/2022"}
              texto1={"Tema de interés"}
              texto2={"Crear parilla de contenido para redes sociales \nIdentificar oportunidades de negocio nuevas \nMejorar el SEO de la página web"}
              texto3={""}
      />
    </Container>
  );
}
