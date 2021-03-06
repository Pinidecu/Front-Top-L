import React from "react";
import { TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import {
  ContainerPrincipal,
  ContainerAgenda,
  Linea,
  TextoConfiguracion,
  ContainerPrincipalLive,
} from "../StyledComponents/StyledComponents";
import styled from "styled-components/native";
import ImgLive from "../../Componentes/ImgLive";
import ImgLive2 from "../../Componentes/ImgLive2";
import NavLive from "../../Componentes/NavLive";
import NavLiveOpcion2 from "../../Componentes/NavLiveOpcion2";
import ImgLiveOpcion2 from "../../Componentes/ImgLiveOpcion2";
import foto from "../../../assets/images/live.png";
import foto1 from "../../../assets/images/Sala/5.png";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

const ViewImg2 = styled.View`
  position: absolute;
  bottom: 18vh;
  left: 5%;
  z-index: 1;
`;

export default function AsesoriaLiveOpcion2({ navigation }: Props) {
  return (
    <ContainerPrincipalLive>
      <ImgLiveOpcion2 foto={foto} />
      <ViewImg2>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => {
            navigation.navigate("EventoLive");
          }}
        >
          <ImgLive2 nombre={"@rdaniamor"} foto={foto1} />
        </TouchableOpacity>
      </ViewImg2>
      <NavLiveOpcion2 />
    </ContainerPrincipalLive>
  );
}
