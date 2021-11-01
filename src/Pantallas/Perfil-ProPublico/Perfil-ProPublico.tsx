import React from "react";
import {  ScrollView } from "react-native";
import Info from "../../Componentes/info";
import BotonAzul from "../../Componentes/BotonAzul";
import { Icon } from "react-native-elements";
import BarraIconos from "../../Componentes/BarraIconos";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import Colors from "../../../constants/Colors";
import TextoGris from "../../Componentes/TextoGris";
import InfoPro from "../../Componentes/InfoPro";
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
} from "../StyledComponents/StyledComponents";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

let textoGris: string =
  "Aquí encontrarás toda la información y publicaciones sobre éste perfil profesional.";

export default function PerfilProPublico({ navigation }: Props) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <ContainerPrincipal>
        <ContainerSuperior>
          <BarraIconos
            titulo={""}
            margin={"0px"}
            colorIcons={Colors.mainCOlorPurpleDark}
            threePoints={true}
            add={true}
          />
          <Navegacion>
            <Titulo
              onPress={() => {
                navigation.navigate("PerfilPublico");
              }}
            >
              <Icon
                name="arrow-left-bold"
                type="material-community"
                color="#4E31EB"
                size={20}
              />
              <TituloText>Perfil social</TituloText>
            </Titulo>
            <Titulo
              onPress={() => {
                navigation.navigate("PerfilVistaPersonal");
              }}
            >
              <Icon
                name="star-border"
                color={Colors.mainCOlorPurpleDark}
                size={20}
              />
              <Puntaje>4.5</Puntaje>
              <Parentesis>(128)</Parentesis>
            </Titulo>
          </Navegacion>
          <Info />
          <Botones>
            <BotonAzul
              ancho={344}
              alto={55.08}
              texto={"AGENDAR ASESORÍA"}
              icon={""}
            />
          </Botones>
        </ContainerSuperior>
        <ContainerInferior>
          <TextoGris texto={textoGris} />
          <InfoPro />
        </ContainerInferior>
      </ContainerPrincipal>
    </ScrollView>
  );
}
