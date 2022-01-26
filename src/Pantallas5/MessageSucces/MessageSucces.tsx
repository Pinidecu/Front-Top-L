import React, { useState } from "react";
import BarraIconos from "../../Componentes/BarraIconos";
import { Container, StyledImg, Texto, BotonesView, ContainerPrincipal, IconView } from "./styles";
import Colors from "../../../constants/Colors";
import Boton from "../../Componentes/Boton";
import BotonAzul from "../../Componentes/BotonAzul";

export default function MessageSucces() {
  return (
    <Container>
      <BarraIconos
        tituloAB={"Validación profesional"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
      />
      <ContainerPrincipal>
        <IconView>
          <StyledImg
            width={100}
            height={100}
            source={require("../../../assets/images/verificadosf.png")}
          />
          <Texto>
            Obten la verificación de tu cuenta y de tus estudios profesional
            para comenzar a generar ingresos en TopLive
          </Texto>
        </IconView>
        <BotonesView>
          <BotonAzul ancho={100} alto={55.08} texto={"VALIDAR MI CUENTA"} />
          <Boton ancho={100} alto={55.08} texto={"VALIDAR DESPUÉS"} />
        </BotonesView>
      </ContainerPrincipal>
    </Container>
  );
}
