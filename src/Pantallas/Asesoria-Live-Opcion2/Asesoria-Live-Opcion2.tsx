import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import {
  ContainerPrincipal,
  ContainerAgenda,
  Linea,
  TextoConfiguracion,
  ContainerPrincipalLive,
} from "../StyledComponents/StyledComponents";
import ImgLive from "../../Componentes/ImgLive";
import ImgLive2 from "../../Componentes/ImgLive2";
import NavLive from "../../Componentes/NavLive";
import ImgLive2Opcion2 from "../../Componentes/ImgLive2Opcion2";
import NavLiveOpcion2 from "../../Componentes/NavLiveOpcion2";
import ImgLiveOpcion2 from "../../Componentes/ImgLiveOpcion2";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

export default function AsesoriaLiveOpcion2({ navigation }: Props) {
  return (
    <ContainerPrincipalLive>
      <ImgLiveOpcion2 />
      <ImgLive2Opcion2 nombre={"@rdaniamor"} />
      <NavLiveOpcion2 />
    </ContainerPrincipalLive>
  );
}
