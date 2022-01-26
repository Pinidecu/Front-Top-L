import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../../../constants/Colors";
import BarraP3 from "../../Componentes/BarraP3";
import CajaBlanca from "../../Componentes/CajaBlanca";
import BotonAzul from "../../Componentes/BotonAzul";
import { BusquedaView, CajaBusqueda, Container, StyledText, TextContainer } from "./styles";

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