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
import Sala1 from "../../../assets/images/Sala1.png";
import Sala2 from "../../../assets/images/Sala2.png";
import Sala3 from "../../../assets/images/Sala3.png";
import Equipo1 from "../../../assets/images/Equipo1.png";
import Equipo2 from "../../../assets/images/Equipo2.png";
import Hashtag from "../../Componentes/Hashtag";
import SalaLive from "../../Componentes/SalaLive";
import SalaParaTi from "../../Componentes/SalaParaTi";

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

export const TemasView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 5px;
`;

export const HashtagView = styled.View`
  flex-direction: row;
  width: 90%;
  column-gap: 10px;
  margin: 10px;
`;

const TituloPublicacionView = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-top: 5px;
`;

export const EquiposView = styled.View`
  align-items: center;
  width: 90%;
  justify-content: space-between;
  align-self: center;
  margin: 15px;
`;

export const SalasView = styled.View`
width:90%;
`;

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
  sub?: boolean;
}
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
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

export default function Salas({ navigation }: Props) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <ContainerPrincipalEquipos>
        <BarraIconos
          titulo={"Salas"}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          add={true}
          lupaBlue={true}
        />
        <Linea />
        <TemasView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.mainColorBlack}
          >
            Temas
          </StyledText>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={29}
            color={Colors.mainCOlorPurpleLigth}
            sub={true}
          >
            Ver todo
          </StyledText>
        </TemasView>
        <HashtagView>
          <Hashtag titulo={"Hashtag"} icono={"add"} />
          <Hashtag titulo={"Hashtag"} icono={"add"} />
          <Hashtag titulo={"Hashtag"} icono={"add"} />
          <Hashtag titulo={"Hashtag"} icono={"add"} />
        </HashtagView>
        <Linea />
        <TemasView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.mainColorBlack}
          >
            Salas Live
          </StyledText>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={29}
            color={Colors.mainCOlorPurpleLigth}
            sub={true}
          >
            Ver todo
          </StyledText>
        </TemasView>
        <SalasView>
          <SalaLive
            titulo={"La tertulía sobre marketing contemporaneo"}
            imagen={Sala1}
          />
          <SalaLive
            titulo={"Aprendamos más sobre el self coaching"}
            imagen={Sala2}
          />
          <SalaLive
            titulo={"Seminario live sobre el fitness en el caribe"}
            imagen={Sala3}
          />
        </SalasView>
        <TituloPublicacionView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.black}
          >
            Salas para ti
          </StyledText>
          <Icon
            name="more-horiz"
            color={Colors.mainCOlorPurpleLigth}
            size={25}
          />
        </TituloPublicacionView>
        <EquiposView>
          <SalaParaTi
            titulo="Yoga para ti, para mí y para todos! Aeroyogabaq"
            tags="Category •  Nombre del creador "
            dia="Sábado, 14 septiembre, 2022"
            hora="5:00 AM -03:00PM"
            imagen={Equipo1}
          />
          <SalaParaTi
            titulo="Yoga para ti, para mí y para todos! Aeroyogabaq"
            tags="Category •  Nombre del creador "
            dia="Sábado, 14 septiembre, 2022"
            hora="5:00 AM -03:00PM"
            imagen={Equipo2}
          />
        </EquiposView>
      </ContainerPrincipalEquipos>
    </ScrollView>
  );
}
