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
  row-gap: 10px;
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
  background-color: ${Colors.white};
  flex-direction: row;
  column-gap: 10px;
  border-radius: 8px;
  margin:10px 0px
  align-items: center;
  width: 90%;
  padding: 1vh;
  box-shadow: 0px 0px 8px rgba(157, 164, 181, 0.2);
`;

export const ViewHistorial = styled.View`
  width: 90%;
  margin: 10px;
  align-items: left;
`;

export const TituloView = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin-top: 15px;
`;
export const ClientesView = styled.View`
  width: 90%;
`;

export const AsesoriasView = styled.View`
  width: 90%;
`;

export default function Agenda({ navigation }: Props) {
  return (
    <ContainerScroll>
      <Container>
        <BarraIconos
          titulo={"Asesorías"}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          add={true}
          lupaBlue={true}
        />
        <BusquedaView>
          <Icon name="search" color={Colors.black} size={25} />
          <StyledText
            size={14}
            weight={700}
            fs={"normal"}
            lh={18}
            color={Colors.SecondaryGray}
          >
            Busca un cliente, fecha o área
          </StyledText>
        </BusquedaView>
        <AsesoriasView>
          <AgendaAsesoria
            cliente={"James Franco Pión"}
            categoria={"Yoga • Meditación holística"}
            fecha={"18/11/2021"}
            hora={"4:00PM"}
            tiempo={"45 minutos"}
          />
          <AgendaAsesoria
            cliente={"James Franco Pión"}
            categoria={"Yoga • Meditación holística"}
            fecha={"18/11/2021"}
            hora={"4:00PM"}
            tiempo={"45 minutos"}
          />
          <AgendaAsesoria
            cliente={"James Franco Pión"}
            categoria={"Yoga • Meditación holística"}
            fecha={"18/11/2021"}
            hora={"4:00PM"}
            tiempo={"45 minutos"}
          />
        </AsesoriasView>
      </Container>
    </ContainerScroll>
  );
}
