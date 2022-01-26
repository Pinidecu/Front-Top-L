import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import CajaHist from "../../Componentes/CajaHist";

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
`;
export const RecomendacionView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  padding: 2%;
  background-color: ${Colors.SecondaryPurpleLight};
  justify-content: space-between;
`;

export default function Historial() {
  return (
    <Container>
      <CajaHist 
        cliente={" James Franco Pión"}
        categoria={" Yoga • Meditación holística"}
        fecha={" 18/11/2021"}
        hora ={" 4:00PM"}
        tiempo={" 45 minutos"}
      />
     <CajaHist 
        cliente={" James Franco Pión"}
        categoria={" Yoga • Meditación holística"}
        fecha={" 18/11/2021"}
        hora ={" 4:00PM"}
        tiempo={" 45 minutos"}
      />
      <CajaHist 
        cliente={" James Franco Pión"}
        categoria={" Yoga • Meditación holística"}
        fecha={" 18/11/2021"}
        hora ={" 4:00PM"}
        tiempo={" 45 minutos"}
      />
    </Container>
  );
}
