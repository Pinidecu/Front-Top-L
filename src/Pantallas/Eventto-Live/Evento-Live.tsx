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
import NavLive, { IconosLive } from "../../Componentes/NavLive";
import NavLiveOpcion2 from "../../Componentes/NavLiveOpcion2";
import ImgLiveOpcion2 from "../../Componentes/ImgLiveOpcion2";
import BarraIconos from "../../Componentes/BarraIconos";
import Colors from "../../../constants/Colors";
import { Icon } from "react-native-elements";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

interface IndicatorProps {
  color: string;
}

const Indicator = styled.View<IndicatorProps>`
  background-color: ${(props) => props.color};
  border-radius: 10px;
  height: 1vh;
  width: 40%;
  position: absolute;
  bottom: 21vh;
  left: 4%;
`;

const Barra = styled.View`
  background-color: ${Colors.white};
  opacity: 0.92;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  column-gap: 10px;
  height: 15vh;
  width: 100%;
  position: absolute;
  bottom: 0vh;
`;
const ViewIconos = styled.View`
  flex-direction: row;
  align-items: center;
  height: 10vh;
  column-gap: 10px;
  position: absolute;
  bottom: 10vh;
  left: 4%;
  z-index: 2;
`;

const ViewImg2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 90%;
  height: 22vh;
  bottom: -13vh;
  z-index: 1;
  align-self: center;
`;

const ViewBarra = styled.View`
  justify-content: flex-end;
  height: 20vh;
`;

export default function EventoLive({ navigation }: Props) {
  return (
    <ContainerPrincipalLive>
      <ImgLiveOpcion2 />
      <Barra />
      <ViewBarra>
        <BarraIconos
          titulo={""}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          threePoints={false}
        />
      </ViewBarra>
      <Indicator color={Colors.mainCOlorPurpleDark} />
      <ViewIconos>
        <IconosLive color={Colors.SecondaryPurpleLight}>
          <Icon name="flip-camera-ios" color={Colors.SecondaryGray} size={25} />
        </IconosLive>
        <IconosLive color={Colors.SecondaryPurpleLight}>
          <Icon name="mic-off" color={Colors.SecondaryGray} size={25} />
        </IconosLive>
        <IconosLive color={Colors.mainColorRed}>
          <Icon name="call-end" color={Colors.white} size={25} />
        </IconosLive>
        <IconosLive color={Colors.SecondaryPurpleLight}>
          <Icon name="more-vert" color={Colors.SecondaryGray} size={25} />
        </IconosLive>
      </ViewIconos>
      <ViewImg2>
        <ImgLive2 nombre={"@rdaniamor"} />
        <ImgLive2 nombre={"@karendagy"} />
        <ImgLive2 nombre={"@ronalddiaz"} />
      </ViewImg2>
    </ContainerPrincipalLive>
  );
}
