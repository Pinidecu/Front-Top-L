import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import styled from "styled-components/native";
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

const ViewImg2 = styled.View`
  position: absolute;
  bottom: 3%;
  right: 5%;
  z-index:1;
`;

export default function AsesoriaLive({ navigation }: Props) {
  return (
    <ContainerPrincipalLive>
      <ImgLive />
      <ViewImg2>
        <ImgLive2 nombre={"@rdaniamor"} />
      </ViewImg2>
      <NavLive />
    </ContainerPrincipalLive>
  );
}
