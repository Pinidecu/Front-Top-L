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

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

export default function AsesoriaLive({ navigation }: Props) {
  return (
    <ContainerPrincipalLive>
      <ImgLive />
      <ImgLive2 nombre={'@rdaniamor'}/>
      <NavLive/>
    </ContainerPrincipalLive>
  );
}
