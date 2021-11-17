import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import styled from "styled-components/native";
import { ContainerPrincipalLive } from "../StyledComponents/StyledComponents";
import ImgLive from "../../Componentes/ImgLive";
import ImgLive2 from "../../Componentes/ImgLive2";
import NavLive from "../../Componentes/NavLive";
import foto from "../../../assets/images/live.png";
import foto1 from "../../../assets/images/Sala/5.png";
import { TouchableOpacity } from "react-native";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

const ViewImg2 = styled.View`
  position: absolute;
  bottom: 3%;
  right: 5%;
  z-index: 1;
`;

export default function AsesoriaLive({ navigation }: Props) {
  return (
    <ContainerPrincipalLive>
      <ImgLive foto={foto} />
      <ViewImg2>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => {
            navigation.navigate("AsesoriaLiveOpcion2");
          }}
        >
          <ImgLive2 nombre={"@rdaniamor"} foto={foto1} />
        </TouchableOpacity>
      </ViewImg2>
      <NavLive />
    </ContainerPrincipalLive>
  );
}
