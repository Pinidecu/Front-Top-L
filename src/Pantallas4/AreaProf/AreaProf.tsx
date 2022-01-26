import React from "react";
import Colors from "../../../constants/Colors";
import BarraIconos from "../../Componentes/BarraIconos";
import CajaArea from "./CajaArea/CajaArea";
import { Container, StyledText, TextContainer } from "./styles";

export default function AreaProf() {
  return (
    <Container>
      <BarraIconos
        titulo={"Área profesional"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        add={true}
        campana={true}
      />
      <TextContainer>
        <StyledText
          size={14}
          weight={400}
          fs={"normal"}
          lh={18}
          color={Colors.SecondaryGray}
        >
          Selecciona un área profesional
        </StyledText>
      </TextContainer>
      <CajaArea
        texto={"Artes plásticas"}
        icon1={true}
      />
      <CajaArea
        texto={"Derecho"}
        icon2={true}
      />
      <CajaArea
        texto={"Desarrollo"}
        icon2={true}
      />
      <CajaArea
        texto={"Diseño"}
        icon2={true}
      />
      <CajaArea
        texto={"Salud"}
        icon2={true}
      />
      <CajaArea
      texto={"Administración"}
      icon2={true}
      />
      <CajaArea
      texto={"Diseño"}
      icon2={true}
      />
      <CajaArea
      texto={"Marketing"}
      icon2={true}
      />
    </Container>
  );
}