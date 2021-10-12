import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Info from "../../Componentes/info";
import BotonAzul from "../../Componentes/BotonAzul";
import { Icon } from "react-native-elements";
import { styles } from "./Perfil-Publico.module";
import BarraIconos from "../../Componentes/BarraIconos";
import Explorar from "../../Componentes/Explorar";
import Destacado from "../../Componentes/Destacado";
import Actividad from "../../Componentes/Actividad";
import Publicacion from "../../Componentes/Publicacion";
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
  DestacadoView,
  PublicacionView,
  ActividadView,
} from "../StyledComponents/StyledComponents";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

export default function PerfilPublico({ navigation }: Props) {
  return (
    <ScrollView>
      <ContainerPrincipal>
        <ContainerSuperior>
          <BarraIconos titulo={""} />
          <Navegacion>
            <View></View>
            {/* para ordenar la navegacion */}
            <Titulo
              onPress={() => {
                navigation.navigate("PerfilProPublico");
              }}
            >
              <TituloText>Perfil profesional</TituloText>
              <Icon
                name="arrow-right-bold"
                type="material-community"
                color="#4E31EB"
                size={20}
              />
            </Titulo>
          </Navegacion>
          <Info />
          <Botones>
            <BotonAzul
              ancho={177}
              alto={55.08}
              texto={"AGENDAR ASESORIA"}
              icon={""}
            />
            <BotonAzul
              ancho={155}
              alto={55.08}
              texto={"MENSAGE"}
              icon={"forum"}
            />
          </Botones>
        </ContainerSuperior>
        <ContainerInferior>
          <Explorar titulo={"Contenido destacado"} />
          <DestacadoView>
            <Destacado />
            <Destacado />
          </DestacadoView>
          <Explorar titulo={"Actividad"} />
          <ActividadView>
            <Actividad />
            <Actividad />
          </ActividadView>{" "}
          <PublicacionView>
            <Publicacion />
          </PublicacionView>
        </ContainerInferior>
      </ContainerPrincipal>
    </ScrollView>
  );
}
