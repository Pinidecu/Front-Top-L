import React, { useState } from "react";
import BarraIconos from "../../Componentes/BarraIconos";
import { Container, ContainerInferior, Crear, CrearNegro, Inicio, Portada, StyledImg, SubTitulo, Titulo } from "./styles";
import Colors from "../../../constants/Colors";
import Input from "./Input/Input";
import OpcionesInicio from "./OpcionesInicio/OpcionesInicio";
import BotonAzul from "../../Componentes/BotonAzul";

export default function CuentaLogin() {

  return (
    <Container>
      <Portada>
        <BarraIconos margin={"0px"} colorIcons={Colors.mainCOlorPurpleLigth} />
        <StyledImg
          width={250}
          height={375}
          source={require("../../../assets/images/Grafismo.png")}
        />
        <Titulo>Bienvenido a la comunidad TopLive!</Titulo>
      </Portada>
      <ContainerInferior>
        <Inicio>
          <SubTitulo>Iniciar sesión</SubTitulo>
          <Input nombre={"Nombre de usuario"} />
          <Input nombre={"Contraseña"} />
          <OpcionesInicio />
        </Inicio>
        <BotonAzul
          ancho={100}
          alto={55.08}
          texto={"ACCEDER A MI CUENTA"}
          icon={""}
        />
        <CrearNegro>
          Todavía no tienes una cuenta?<Crear> Crear cuenta</Crear>
        </CrearNegro>
      </ContainerInferior>
    </Container>
  );
}
