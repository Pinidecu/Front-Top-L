import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import InfoMiPerfil from "../../Componentes/InfoMiPerfil";
import BarraIconos from "../../Componentes/BarraIconos";
import Explorar from "../../Componentes/Explorar";
import Actividad from "../../Componentes/Actividad";
import Agenda from "../../Componentes/Agenda";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import {
  ContainerPrincipal,
  ContainerSuperior,
  ContainerInferior,
  Botones,
  ActividadView,
  ContainerPrincipalAgenda,
  Linea,
  ContainerPrincipalEquipos,
} from "../StyledComponents/StyledComponents";
import Boton from "../../Componentes/Boton";
import Colors from "../../../constants/Colors";
import DiaAgenda from "../../Componentes/DiaAgenda";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import Cronograma from "../../Componentes/Cronograma";
import Cronograma2 from "../../Componentes/Cronograma2";
import Publicacion from "../../Componentes/Publicacion";
import EquipoPublicacion from "../../Componentes/EquipoPublicacion";
import Equipo1 from "../../../assets/images/Equipo1.png";
import Equipo2 from "../../../assets/images/Equipo2.png";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

export const TextView = styled.View`
  justify-content: center;
  width: 90%;
  align-self: center;
`;

export const Eventos = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  align-self: center;
`;
export const NotiView = styled.View`
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  margin: 10px 0px;
`;

export const EquiposView = styled.View`
  align-items: center;
  width: 90%;
  justify-content: space-between;
  align-self: center;
`;

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
  margin: number;
  sub?: boolean;
}
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin}px 0px;
  ${({ sub }) =>
    sub &&
    `    
  text-decoration: underline ${Colors.mainCOlorPurpleLigth};
  `}
`;

interface StyledImgProps {
  width: number;
  height: number;
}
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default function Equipos({ navigation }: Props) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <ContainerPrincipalEquipos>
        <BarraIconos
          titulo={"Mis equipos"}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleDark}
          threePoints={true}
        />
        <EquiposView>
          <EquipoPublicacion
            titulo="Yoga para ti, para mí y para todos! Aeroyogabaq"
            tags="Bienestar físico •  Alexandra Martinez"
            imagen={Equipo1}
            meGusta="tú y 6770 personas más asistirán a ésta sala"
          />
          <EquipoPublicacion
            titulo="Living Barranquilla "
            tags="Epiritualidad •  Living BAQ"
            imagen={Equipo2}
            meGusta="tú y 6770 personas más asistirán a ésta sala"
          />
        </EquiposView>
      </ContainerPrincipalEquipos>
    </ScrollView>
  );
}
