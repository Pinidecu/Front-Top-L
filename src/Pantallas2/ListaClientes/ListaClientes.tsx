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
import Cliente from "../../Componentes/Cliente";
import fotoPerfil1 from "../../../assets/images/Sala/9.png";
import fotoPerfil2 from "../../../assets/images/Sala/7.png";
import fotoPerfil3 from "../../../assets/images/Sala/3.png";
import fotoPerfil4 from "../../../assets/images/Sala/4.png";
import fotoPerfil5 from "../../../assets/images/Sala/8.png";

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
  background-color: ${Colors.white};
  flex-direction: row;

  border-radius: 8px;
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

export default function ListaClientes({ navigation }: Props) {
  return (
    <ContainerScroll>
      <Container>
        <BarraIconos
          titulo={"Mis clientes"}
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
            Busca un cliente, fecha o ??rea
          </StyledText>
        </BusquedaView>
        <TituloView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.black}
          >
            Clientes recientes
          </StyledText>
          <StyledImg
            width={20}
            height={20}
            source={require("../../../assets/images/editarazul.png")}
          />
        </TituloView>
        <ClientesView>
          <Cliente nombre={"Antony Ruiz"} id={"@anruizp"} foto={fotoPerfil1} />
          <Cliente
            nombre={"Alejandra Martinez"}
            id={" @alemartinez"}
            foto={fotoPerfil2}
          />
          <Cliente
            nombre={"karen Puyol"}
            id={" @kkpuyol02"}
            foto={fotoPerfil3}
          />
          <Cliente
            nombre={"Juan Ortiz M"}
            id={"@kkpuyol02"}
            foto={fotoPerfil4}
          />
          <Cliente
            nombre={"Ricardo A. Mor"}
            id={"@rdaniamor"}
            foto={fotoPerfil5}
          />
        </ClientesView>
        <TituloView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.black}
          >
            Todos mis clientes
          </StyledText>
          <Icon
            name="more-horiz"
            color={Colors.mainCOlorPurpleLigth}
            size={25}
          />
        </TituloView>
        <ClientesView>
          <Cliente nombre={"Antony Ruiz"} id={"@anruizp"} foto={fotoPerfil1} />
          <Cliente
            nombre={"Alejandra Martinez"}
            id={" @alemartinez"}
            foto={fotoPerfil2}
          />
          <Cliente
            nombre={"karen Puyol"}
            id={" @kkpuyol02"}
            foto={fotoPerfil3}
          />
          <Cliente
            nombre={"Juan Ortiz M"}
            id={"@kkpuyol02"}
            foto={fotoPerfil4}
          />
        </ClientesView>
      </Container>
    </ContainerScroll>
  );
}
