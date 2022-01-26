import React from "react";
import CajaHist from "./CajaHist/CajaHist";
import { Container } from "./styles";

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
