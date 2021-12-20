import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
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

export const Superior = styled.View`
  align-items: center;
  width: 100%;
  background-color: ${Colors.white};
`;

export const MisGananciasView = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
`;
export const Monto = styled.View`
  background-color: ${Colors.mainCOlorPurpleDark};
  width: 90%;
  align-items: center;

  padding: 5vh;
  margin: 10px;
  border-radius: 8px;
`;

export const TablaView = styled.View`
  width: 90%;
  margin: 20px;
`;

export const ImgView = styled.View`
  margin-left: 30px;
`;

const TituloTabla = styled.Text`
  font-family: Proxima Nova;
  font-size: 14;
  font-weight: 700;
  font-style: "normal";
  line-height: 10;
  color: ${Colors.mainColorBlack};
`;

const ContainerScroll = styled.ScrollView`
  background-color: ${Colors.white};
`;

export const BusquedaView = styled.View`
  background-color: ${Colors.SecondaryPurpleLight};
  border-radius: 8px;
  width: 90%;
  padding: 1vh;
`;

export const ViewHistorial = styled.View`
  width: 90%;
  margin: 10px;
  align-items: left;
`;

export default function AgendaHistorial({ navigation }: Props) {
  return (
    <ContainerScroll>
      <Container>
        <BarraIconos
          titulo={"Mi Historial Live"}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          add={true}
          campana={true}
        />
        <BusquedaView>
          <ImgView>
            <StyledImg
              width={100}
              height={100}
              source={require("../../../assets/images/historial.png")}
            />
          </ImgView>
        </BusquedaView>
        <ViewHistorial>
          <StyledText
            size={14}
            weight={700}
            fs={"normal"}
            lh={18}
            color={Colors.SecondaryGray}
          >
            Profesional
          </StyledText>
          <Historial nombre="Asesorías creadas" linea={true} />
          <Historial nombre="Lista de clientes" linea={true} />
          <Historial nombre="Eventos creados" linea={true} />
        </ViewHistorial>
        <ViewHistorial>
          <StyledText
            size={14}
            weight={700}
            fs={"normal"}
            lh={18}
            color={Colors.SecondaryGray}
          >
            Social
          </StyledText>
          <Historial nombre="Asesorías recibidas" linea={true} />
          <Historial nombre="Eventos asistidos" linea={true} />
          <Historial nombre="Reviews" linea={true} />
          <Historial nombre="Denuncias" linea={true} />
        </ViewHistorial>
      </Container>
    </ContainerScroll>
  );
}
