import React from "react";
import Colors from "../../../constants/Colors";
import BarraP3 from "../../Componentes/BarraP3";
import CajaBlanca from "../../Componentes/CajaBlanca";
import BotonAzul from "../../Componentes/BotonAzul";
import { Container, RecomendacionView, StyledText } from "./styles";

export default function NewRespuesta() {
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
            Julio, que quieres recomendar a la gente top hoy?
          </StyledText>
      </RecomendacionView>
      <CajaBlanca
              ancho={90}
              alto={60}
              texto1={"Perfil recomendado"}
              texto2={"@julioguitarrabaq"}
              icon={true}
      />
      <CajaBlanca
              ancho={90}
              alto={60}
              texto1={"Título de la recomendación"}
              texto2={"    "}
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
       texto={"RECOMENDAR"}
       icon={""}
      />
    </Container>
  );
}
