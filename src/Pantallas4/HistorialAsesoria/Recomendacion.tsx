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
              alto={232}
              fecha={"03/10/2022"}
              texto1={"Titulo de la anotación"}
              texto2={"Loremsum matiatus lorem ipsum dolor sim lorem ipsum dolor amet"}
              texto3={"Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum. Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum"}
              icon={true}
      />
    </Container>
  );
}
