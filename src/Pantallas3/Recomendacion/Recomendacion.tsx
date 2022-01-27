import React from "react";
import Colors from "../../../constants/Colors";
import BarraP3 from "../../Componentes/BarraP3";
import CajaBlanca from "../../Componentes/CajaBlanca";
import BotonAzul from "../../Componentes/BotonAzul";
import { Container, RecomendacionView, StyledText } from "./styles";

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
      />
      <CajaBlanca
              ancho={90}
              alto={60}
              texto1={"Título de la publicación"}
              texto2={"    "}
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
