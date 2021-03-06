import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import styled from "styled-components/native";
import {
  ContainerPrincipal,
  ContainerAgenda,
  Linea,
  TextoConfiguracion,
  ContainerPrincipalLive,
  ContainerPrincipalEventoLive,
} from "../StyledComponents/StyledComponents";
import ImgLive from "../../Componentes/ImgLive";
import ImgLive2 from "../../Componentes/ImgLive2";
import NavLive, { IconosLive } from "../../Componentes/NavLive";
import NavLiveOpcion2 from "../../Componentes/NavLiveOpcion2";
import ImgLiveOpcion2 from "../../Componentes/ImgLiveOpcion2";
import BarraIconos from "../../Componentes/BarraIconos";
import Colors from "../../../constants/Colors";
import { Icon } from "react-native-elements";
import foto from "../../../assets/images/live.png";
import foto1 from "../../../assets/images/Sala/5.png";
import foto2 from "../../../assets/images/Sala/3.png";
import foto3 from "../../../assets/images/Sala/4.png";
import BarraLiveOpcion2 from "../../Componentes/BarraLiveOpcion2";
import imagenPerfil from "../../../assets/images/Sala/8.png";

/* type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
}; */

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
  /* opacity: 0.92; */
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  :10px ;
  height: 15vh;
  width: 100%;
  position: absolute;
  bottom: 0vh;
`;
const ViewIconos = styled.View`
  flex-direction: row;
  align-items: center;
  height: 10vh;
  :10px ;
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
  align-items: center;
  position: absolute;
  bottom: -20vh;
  width: 100%;
  height: 7vh;
  background-color: white;
`;

interface ContainerProps {
  foto: string;
}
const Container = styled.View<ContainerProps>`
  background-image: url(${(props) => props.foto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 89vh;
`;

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

export default function EventoLive({ navigation }: Props) {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <Container foto={foto}>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => {
            navigation.navigate("SalaDetalle");
          }}
        >
          <BarraLiveOpcion2
            fotoPerfil={imagenPerfil}
            nombre={"Ricarzo Zambrano Pi??n"}
            usuario={"@ricardocoach"}
            hora={"00:31:21"}
          />
        </TouchableOpacity>
        <Barra />

        <Indicator color={Colors.mainCOlorPurpleDark} />
      </Container>
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
        <ImgLive2 nombre={"@rdaniamor"} foto={foto1} />
        <ImgLive2 nombre={"@karendagy"} foto={foto2} />
        <ImgLive2 nombre={"@ronalddiaz"} foto={foto3} />
      </ViewImg2>
      <ViewBarra>
        <BarraIconos
          titulo={""}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          threePoints={false}
          add={true}
        />
      </ViewBarra>
    </ScrollView>
  );
}

/* export default function EventoLive({ navigation }: Props) {
  return (
      <ImgLiveOpcion2 foto={foto}>
        <Barra />
        <ViewBarra>
          <BarraIconos
            titulo={""}
            margin={"0px"}
            colorIcons={Colors.mainCOlorPurpleLigth}
            threePoints={false}
            add={true}
          />
        </ViewBarra>
        <Indicator color={Colors.mainCOlorPurpleDark} />
        <ViewIconos>
          <IconosLive color={Colors.SecondaryPurpleLight}>
            <Icon
              name="flip-camera-ios"
              color={Colors.SecondaryGray}
              size={25}
            />
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
          <ImgLive2 nombre={"@rdaniamor"} foto={foto1} />
          <ImgLive2 nombre={"@karendagy"} foto={foto2} />
          <ImgLive2 nombre={"@ronalddiaz"} foto={foto3} />
        </ViewImg2>
      </ImgLiveOpcion2>
  );
} */
