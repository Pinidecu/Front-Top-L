import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import BarraIconosSala3 from "./BarraIconosSala3/BarraIconosSala3";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import Colors from "../../../constants/Colors";
import { Icon } from "react-native-elements";
import image1 from "../../assets/images/Sala/1.png";
import image2 from "../../assets/images/Sala/2.png";
import image3 from "../../assets/images/Sala/3.png";
import image4 from "../../assets/images/Sala/4.png";
import image5 from "../../assets/images/Sala/5.png";
import image6 from "../../assets/images/Sala/6.png";
import image7 from "../../assets/images/Sala/7.png";
import image8 from "../../assets/images/Sala/8.png";
import image9 from "../../assets/images/Sala/9.png";
import { IconosLive } from "../../Componentes/NavLive";
import { LineaColor } from "../../Pantallas/StyledComponents/StyledComponents";
import PerfilSalaDetalle3 from "./PerfilSalaDetalle3/PerfilSalaDetalle3";
import Titulo3Puntos from "../../Componentes/Titulo3puntos";
import ParticipanteSala3 from "./ParticipanteSala3/ParticipanteSala3";
import { BotonesLlamada, ContainerInferior, ContainerPrincipalSala, ContainerSuperior, FlatList1, IconosLlamada, StyledText, ViewTexts } from "./styles";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

interface participante {
  nombre: string;
  activo: boolean;
  foto: string;
  mute: boolean;
}

let participantes: participante[] = [
  {
    nombre: "@rdaniamor",
    activo: true,
    foto: image1,
    mute: false,
  },
  {
    nombre: "@karendagy",
    activo: true,
    foto: image2,
    mute: true,
  },
  {
    nombre: "@ronalddiaz",
    activo: true,
    foto: image3,
    mute: true,
  },
];

let audiencia: participante[] = [
  {
    nombre: "@rdaniamor",
    activo: false,
    foto: image4,
    mute: true,
  },
  {
    nombre: "@karendagy",
    activo: false,
    foto: image5,
    mute: true,
  },
  {
    nombre: "@ronalddiaz",
    activo: false,
    foto: image6,
    mute: true,
  },
  {
    nombre: "@rdaniamor",
    activo: false,
    foto: image7,
    mute: true,
  },
  {
    nombre: "@karendagy",
    activo: false,
    foto: image8,
    mute: true,
  },
  {
    nombre: "@ronalddiaz",
    activo: false,
    foto: image9,
    mute: true,
  },
];

export default function SalaDetalle3({ navigation }: Props) {
  return (
    <ContainerPrincipalSala>
      <ContainerSuperior>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => {
            navigation.navigate("AgendaDia");
          }}
        >
          <BarraIconosSala3
            titulo={"9 live users "}
            margin={"0px"}
            colorIcons={Colors.mainCOlorPurpleLigth}
            threePoints={true}
            add={true}
          />
        </TouchableOpacity>
        <PerfilSalaDetalle3 />
        <ViewTexts>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={16}
            color={Colors.SecondaryGray}
          >
            Bienestar físico • Yoga • Creador: Alejandra Martinez
          </StyledText>
        </ViewTexts>
        <FlatList1>
          <Titulo3Puntos titulo={"Participantes"} width={90} />{" "}
          <FlatList
            data={participantes}
            numColumns={3}
            renderItem={({ item }) => (
              <ParticipanteSala3
                nombre={item.nombre}
                activo={item.activo}
                foto={item.foto}
                mute={item.mute}
              />
            )}
          />
        </FlatList1>
      </ContainerSuperior>
      <ContainerInferior>
        <FlatList1>
          <Titulo3Puntos titulo={"Audiencia"} width={90} />
          <FlatList
            data={audiencia}
            numColumns={3}
            renderItem={({ item }) => (
              <ParticipanteSala3
                nombre={item.nombre}
                activo={item.activo}
                foto={item.foto}
                mute={item.mute}
              />
            )}
          />
        </FlatList1>
        <BotonesLlamada>
          <IconosLlamada>
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
          </IconosLlamada>
          <LineaColor
            color={Colors.mainCOlorPurpleDark}
            height={"5px"}
            width={"152px"}
          />
        </BotonesLlamada>
      </ContainerInferior>
    </ContainerPrincipalSala>
  );
}
