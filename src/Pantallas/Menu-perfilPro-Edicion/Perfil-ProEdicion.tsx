import React from "react";
import { ScrollView } from "react-native";
import InfoMiPerfil from "../../Componentes/InfoMiPerfil";
import BarraIconos from "../../Componentes/BarraIconos";
import Edicion from "../../Componentes/Edicion";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import {
  ContainerPrincipal,
  ContainerAgenda,
  Linea,
  TextoConfiguracion,
} from "../StyledComponents/StyledComponents";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

export default function PerfilProEdicion({ navigation }: Props) {
  return (
    <ScrollView>
      <ContainerPrincipal>
        <BarraIconos titulo={"Mi espacio"} margin={"30px"} />
        <InfoMiPerfil />
        <ContainerAgenda>
          <Edicion titulo={"Ajustes de perfil"} icono={"person-outline"} />
          <Edicion titulo={"Contenido creado"} icono={"work"} />
          <Edicion titulo={"Mi equipo"} icono={"group"} />
          <Edicion titulo={"Mi agenda"} icono={"calendar-today"} />
          <Edicion titulo={"Mi billeterea"} icono={"account-balance-wallet"} />
        </ContainerAgenda>
        <Linea />
        <TextoConfiguracion>Configuración y privacidad</TextoConfiguracion>
        <TextoConfiguracion>Centro de ayuda</TextoConfiguracion>
      </ContainerPrincipal>
    </ScrollView>
  );
}
