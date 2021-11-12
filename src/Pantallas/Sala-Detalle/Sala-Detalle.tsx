import React from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import InfoMiPerfil from "../../Componentes/InfoMiPerfil";
import BarraIconos from "../../Componentes/BarraIconos";
import Edicion from "../../Componentes/Edicion";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import {
  ContainerPrincipal,
  ContainerAgenda,
  Linea,
  TextoConfiguracion,
  ContainerPrincipalSala,
  LineaColor,
} from "../StyledComponents/StyledComponents";
import Colors from "../../../constants/Colors";
import { Icon } from "react-native-elements";
import PerfilSalaDetalle from "../../Componentes/PerfilSalaDetalle";
import styled from "styled-components/native";
import ParticipanteSala from "../../Componentes/ParticipanteSala";
import { IconosLive } from "../../Componentes/NavLive";
import image1 from "../../../assets/images/Sala/1.png";
import image2 from "../../../assets/images/Sala/2.png";
import image3 from "../../../assets/images/Sala/3.png";
import image4 from "../../../assets/images/Sala/4.png";
import image5 from "../../../assets/images/Sala/5.png";
import image6 from "../../../assets/images/Sala/6.png";
import image7 from "../../../assets/images/Sala/7.png";
import image8 from "../../../assets/images/Sala/8.png";
import image9 from "../../../assets/images/Sala/9.png";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

const ViewTexts = styled.View`
  width: 100%;
  margin: 20px;
  padding: 0 20px;
  row-gap: 10px;
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

const ViewParticipantes = styled.View`
  column-gap: 5px;
  align-self: center;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-wrap: wrap;
  width: 95vw;
  height: 55%;
`;

const BotonesLlamada = styled.View`
  align-items: center;
  justify-content: space-between;
  row-gap: 20px;
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
  foto:string;
}

let participantes: participante[] = [
  {
    nombre: "@rdaniamor",
    activo: true,
    foto: image1,
  },
  {
    nombre: "@karendagy",
    activo: false,
    foto: image2,
  },
  {
    nombre: "@ronalddiaz",
    activo: false,
    foto: image3,
  },
  {
    nombre: "@rdaniamor",
    activo: false,
    foto: image4,
  },
  {
    nombre: "@karendagy",
    activo: false,
    foto: image5,
  },
  {
    nombre: "@ronalddiaz",
    activo: false,
    foto: image6,
  },
  {
    nombre: "@rdaniamor",
    activo: false,
    foto: image7,
  },
  {
    nombre: "@karendagy",
    activo: false,
    foto: image8,
  },
  {
    nombre: "@ronalddiaz",
    activo: false,
    foto: image9,
  },
];

export default function SalaDetalle({ navigation }: Props) {
  return (
    <ContainerPrincipalSala>
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => {
          navigation.navigate("AgendaDia");
        }}
      >
        <BarraIconos
          titulo={""}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          threePoints={true}
          add={true}
        />
      </TouchableOpacity>
      <PerfilSalaDetalle />
      <ViewTexts>
        <StyledText
          size={14}
          weight={400}
          fs={"normal"}
          lh={16.8}
          color={Colors.mainColorBlack}
        >
          {datos.descripcion}
        </StyledText>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={16}
          color={Colors.SecondaryGray}
        >
          {datos.tags}
        </StyledText>
      </ViewTexts>
      {/* <ViewParticipantes>
        {participantes.map((p) => {
          return (
            <ParticipanteSala
              nombre={p.nombre}
              activo={p.activo}
              foto={p.foto}
            />
          );
        })}
      </ViewParticipantes> */}
      <FlatList
        data={participantes}
        numColumns={3}
        
        renderItem={({ item }) => (
          <ParticipanteSala
            nombre={item.nombre}
            activo={item.activo}
            foto={item.foto}
          />
        )}
      />
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
    </ContainerPrincipalSala>
  );
}
