import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import BarraIconosSala3 from "../Componentes/PublicacionGenteTop/BarraIconosSala3";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../types";

import Colors from "../../constants/Colors";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import image1 from "../../assets/images/Sala/1.png";
import image2 from "../../assets/images/Sala/2.png";
import image3 from "../../assets/images/Sala/3.png";
import image4 from "../../assets/images/Sala/4.png";
import image5 from "../../assets/images/Sala/5.png";
import image6 from "../../assets/images/Sala/6.png";
import image7 from "../../assets/images/Sala/7.png";
import image8 from "../../assets/images/Sala/8.png";
import image9 from "../../assets/images/Sala/9.png";
import { IconosLive } from "../Componentes/NavLive";
import { LineaColor } from "../Pantallas/StyledComponents/StyledComponents";
import PerfilSalaDetalle3 from "../Componentes/PublicacionGenteTop/PerfilSalaDetalle3";
import Titulo3Puntos from "../Componentes/PublicacionGenteTop/Titulo3puntos";
import ParticipanteSala3 from "../Componentes/PublicacionGenteTop/ParticipanteSala3";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

const ViewTexts = styled.View`
  width: 90%;
`;

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;
export const ContainerPrincipalSala = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  align-self: center;
  font-family: Cambria;
`;
const ContainerSuperior = styled.View`
  width: 100%;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
`;
const ContainerInferior = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${Colors.SecondaryPurpleLight};
  align-items: center;
  justify-content: space-between;
`;

const BotonesLlamada = styled.View`
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
  padding: 10px;
`;
const IconosLlamada = styled.View`
  flex-direction: row;
  column-gap: 10px;
`;

interface datosPerfilSalaDetalle {
  descripcion: string;
  tags: string;
}

const datos: datosPerfilSalaDetalle = {
  descripcion:
    "El Yoga como filosofia de vida y harmoía con el universo para ti, para mí y para todos! Aeroyogabaq",
  tags: "Bienestar físico • Yoga",
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

const FlatList1 = styled.View`
  width: 90%;
  align-items: center;
  padding: 0px;
  margin: 10px 0px;
`;

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
