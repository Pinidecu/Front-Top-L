import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
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
`
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
`
export const BusquedaView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  padding: 2%;
  background-color: ${Colors.SecondaryPurpleLight};
  justify-content: space-between;
`
export const CajaBusqueda = styled.View`
  flex-direction: row;
  column-gap: 5;
  background-color: ${Colors.white};
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  width: 85%;
  height: 40;
  border-radius: 4px;
  align-self: center;
  margin: 2%;
`
export const TextContainer = styled.View`
  width: 90%;
  align-self: center;
  padding: 17px;
`

export default function Busqueda() {
  return (
    <Container>
      <BarraP3 />
      <BusquedaView>
        <StyledText
            size={20}
            weight={400}
            fs={"normal"}
            lh={24}
            color={Colors.black}
          >
            Múltiples asesorías en vivo al alcance y dentro de tu presupuesto
          </StyledText>
      </BusquedaView>
      <CajaBusqueda>
        <Icon name="search" color={Colors.black} size={16} />
        <StyledText
            size={16}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.SecondaryGray}
          >
            Busca un profesional, área o servicio
          </StyledText>
      </CajaBusqueda>
      <TextContainer>
      <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.SecondaryGray}
          >
            O busca un servicio más especifico:
      </StyledText>
      </TextContainer>
      <CajaBlanca
              ancho={90}
              alto={40}
              texto1={""}
              texto2={"Área profesional"}
              icon={true}
      />
      <CajaBlanca
              ancho={90}
              alto={40}
              texto1={""}
              texto2={"Área de experticia"}
              icon={true}
      />
      <CajaBlanca
              ancho={90}
              alto={40}
              texto1={""}
              texto2={"Fecha & hora"}
              icon={true}
      />
      <CajaBlanca
              ancho={90}
              alto={70}
              texto1={"Tarifa"}
              texto2={""}
              icon3={true}
      />
      <CajaBlanca
              ancho={90}
              alto={70}
              texto1={"Descripción"}
              texto2={"     "}
      />
      <BotonAzul
       ancho={90}
       alto={55.08}
       texto={"AGENDAR ASESORÍA"}
       icon={""}
      />
    </Container>
  );
}