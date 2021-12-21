import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraP3 from "../Componentes/BarraP3";
export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  background-color: ${Colors.backP3};
  justify-content: space-between;
`;

export default function Recomendacion() {
  return (
    <Container>
      <BarraP3 />
      
    </Container>
  );
}
