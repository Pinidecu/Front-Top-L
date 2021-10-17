import React from "react";
import {  ScrollView, TouchableOpacity } from "react-native";
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
  Botones,
  ActividadView,
} from "../StyledComponents/StyledComponents";
import Boton from "../../Componentes/Boton";
import Colors from "../../../constants/Colors";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};


export default function PerfilVistaPersonal({ navigation }: Props) {
  return (
    <ScrollView>
      <ContainerPrincipal>
        <ContainerSuperior>
          <BarraIconos
            titulo={"Mi perfil"}
            margin={"30px"}
            colorIcons={Colors.mainCOlorPurpleDark}
            threePoints={true}
          />
          <InfoMiPerfil />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PerfilProEdicion");
            }}
          >
            <Botones>
              <Boton
                ancho={344}
                alto={55.08}
                texto={"EDITAR MI PERFIL"}
                icon={""}
              />
            </Botones>
          </TouchableOpacity>
        </ContainerSuperior>
        <ContainerInferior>
          <Explorar titulo={"Actividad"} />
          <ActividadView>
            <Actividad />
            <Actividad />
            <Actividad />
          </ActividadView>
          <Explorar titulo={"Mi agenda"} />
          <Agenda />
        </ContainerInferior>
      </ContainerPrincipal>
    </ScrollView>
  );
}
