import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import InfoMiPerfil from "../../Componentes/InfoMiPerfil";
import BarraIconos from "../../Componentes/BarraIconos";
import Explorar from "../../Componentes/Explorar";
import Actividad from "../../Componentes/Actividad";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import {
  ContainerPrincipal,
  ContainerSuperior,
  ContainerInferior,
  Botones,
  ActividadView,
  ContainerPrincipalAgenda,
} from "../StyledComponents/StyledComponents";
import Boton from "../../Componentes/Boton";
import Colors from "../../../constants/Colors";
import DiaAgenda from "../../Componentes/DiaAgenda";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import Historial from "../../Componentes/Historial";
import Cliente from "../../Componentes/Cliente";
import fotoPerfil1 from "../../../assets/images/Sala/9.png";
import fotoPerfil2 from "../../../assets/images/Sala/7.png";
import fotoPerfil3 from "../../../assets/images/Sala/3.png";
import fotoPerfil4 from "../../../assets/images/Sala/4.png";
import fotoPerfil5 from "../../../assets/images/Sala/8.png";
import AgendaAsesoria from "../../Componentes/AgendaAsesoria";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

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

export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  background-color: ${Colors.white};
  justify-content: space-between;
`;


const ContainerScroll = styled.ScrollView`
  background-color: ${Colors.white};
`;

export const AjustesView = styled.View`
  background-color: ${Colors.destacado};
  width: 100%;
  align-items: center;
  padding: 15px;
`;

export const TituloView = styled.View`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
`;

export const ListaView = styled.View`
  width: 100%;
  padding: 0px 10px 10px 10px;
  background-color: ${Colors.destacado};
`;


export const ClientesView = styled.View`
  width: 90%;
`;

export const AsesoriasView = styled.View`
  width: 90%;
`;

export default function PerfilAjuste({ navigation }: Props) {
  return (
    <ContainerScroll>
      <Container>
        <BarraIconos
          titulo={"Mi espacio"}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          add={true}
          threePoints={true}
        />
        <AjustesView>
          <StyledImg
            width={30}
            height={30}
            source={require("../../../assets/images/userGris.png")}
          />
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.SecondaryGray}
          >
            Ajustes del perfil
          </StyledText>
        </AjustesView>
        <TituloView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.SecondaryGray}
          >
            Atención al público
          </StyledText>
        </TituloView>
        <ListaView>
          <Historial nombre="Presentación" linea={true} />
          <Historial nombre="Horario de atención" linea={true} />
          <Historial nombre="Asesorías & Tarifas" />
        </ListaView>
        <TituloView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.SecondaryGray}
          >
            Información profesional
          </StyledText>
        </TituloView>
        <ListaView>
          <Historial nombre="Certificados profesionales" linea={true} />
          <Historial nombre="Experiencias laborales" linea={true} />
          <Historial nombre="Idiomas" />
        </ListaView>
      </Container>
    </ContainerScroll>
  );
}
