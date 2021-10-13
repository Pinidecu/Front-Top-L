import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import InfoMiPerfil from "../../Componentes/InfoMiPerfil";
import BarraIconos from "../../Componentes/BarraIconos";
import Explorar from "../../Componentes/Explorar";
import Actividad from "../../Componentes/Actividad";
import Agenda from "../../Componentes/Agenda";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import {
  ContainerPrincipal,
  ContainerSuperior,
  ContainerInferior,
  Navegacion,
  Titulo,
  TituloText,
  Botones,
  Parentesis,
  Puntaje,
  ActividadView,
} from "../StyledComponents/StyledComponents";
import Boton from "../../Componentes/Boton";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

let textoGris: string =
  "Aquí encontrarás toda la información y publicaciones sobre éste perfil profesional.";

export default function PerfilVistaPersonal({ navigation }: Props) {
  return (
    <ScrollView>
      <ContainerPrincipal>
        <ContainerSuperior>
          <BarraIconos titulo={"Mi perfil"} margin={'40px'} />
          <InfoMiPerfil />
          <Botones>
            <Boton
              ancho={344}
              alto={55.08}
              texto={"EDITAR MI PERFIL"}
              icon={""}
            />
          </Botones>
        </ContainerSuperior>
        <ContainerInferior>
          <Explorar titulo={"Actividad"} />
          <ActividadView>
            <Actividad />
            <Actividad />
            <Actividad />
          </ActividadView>
          <Explorar titulo={"Mi agenda"} />
          <Agenda/>
        </ContainerInferior>
      </ContainerPrincipal>
    </ScrollView>
  );
}
