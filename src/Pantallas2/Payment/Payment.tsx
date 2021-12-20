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
import DetalleGanancia from "../../Componentes/DetalleGanancia";

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

export const TitulosView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const TituloTabla = styled.Text`
  font-family: Proxima Nova;
  font-size: 14;
  font-weight: 700;
  font-style: "normal";
  line-height: 10;
  color: ${Colors.mainColorBlack};
`;

const Ganancias = styled.Text`
  margin: 0px;
`;

export const TotalView = styled.View`
  background-color: ${Colors.SecondaryPurpleLight};
  border-radius: 8px;
  flex-direction: row;
  width: 90%;
  align-items: center;
  padding: 10px;
   45%;
`;

export const DetallesView = styled.View`
  margin: 15px;
  align-items: center;
`;

export default function Payment({ navigation }: Props) {
  return (
    <Container>
      <Superior>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => {
            navigation.navigate("HorariosTarifas");
          }}
        >
          <BarraIconos
            titulo={"Mi billetera"}
            margin={"0px"}
            colorIcons={Colors.mainCOlorPurpleLigth}
            colorText={Colors.black}
          />
        </TouchableOpacity>
        <MisGananciasView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.black}
          >
            Mis ganancias
          </StyledText>
          <StyledImg
            width={20}
            height={20}
            source={require("../../../assets/images/editar.png")}
          />
        </MisGananciasView>
        <Monto>
          <StyledText
            size={24}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.white}
          >
            1.600.000
          </StyledText>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={10}
            color={Colors.white}
          >
            Ingresos netos mes de julio
          </StyledText>
        </Monto>
        <MisGananciasView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.black}
          >
            Detalles
          </StyledText>
          <Icon
            name="more-horiz"
            color={Colors.mainCOlorPurpleLigth}
            size={25}
          />
        </MisGananciasView>

        <TablaView>
          <TitulosView>
            <TituloTabla>Fecha</TituloTabla>
            <TituloTabla>ID</TituloTabla>
            <TituloTabla>Valor</TituloTabla>
            <TituloTabla>Estado</TituloTabla>
          </TitulosView>
          <ScrollView
            style={{
              width: "100%",
              height: "30vh",
              marginTop: 10,
            }}
          >
            <Ganancias>
              <DetalleGanancia
                fecha="18/11/2022"
                ID="000229637"
                valor="$12.000.000 COP"
                estado="Pend.."
                indicador={Colors.verde}
              />
              <DetalleGanancia
                fecha="18/11/2022"
                ID="000229637"
                valor="$120.000 COP"
                estado="Pend.."
                indicador={Colors.verde}
              />
              <DetalleGanancia
                fecha="18/11/2022"
                ID="000229637"
                valor="$120.000 COP"
                estado="Pend.."
                indicador={Colors.bordeDestacado}
              />
              <DetalleGanancia
                fecha="18/11/2022"
                ID="000229637"
                valor="$-20.000 COP"
                estado="Pend.."
                indicador={Colors.verde}
              />
              <DetalleGanancia
                fecha="18/11/2022"
                ID="000229637"
                valor="$120.000 COP"
                estado="Pend.."
                indicador={Colors.bordeDestacado}
              />
              <DetalleGanancia
                fecha="18/11/2022"
                ID="000229637"
                valor="$120.000 COP"
                estado="Pend.."
                indicador={Colors.verde}
              />
            </Ganancias>
          </ScrollView>
        </TablaView>
        <TotalView>
          <StyledText
            size={12}
            weight={700}
            fs={"normal"}
            lh={18}
            color={Colors.mainCOlorPurpleDark}
          >
            Total
          </StyledText>
          <StyledText
            size={12}
            weight={700}
            fs={"normal"}
            lh={18}
            color={Colors.mainCOlorPurpleDark}
          >
            $1.200.000 COP
          </StyledText>
        </TotalView>
      </Superior>
      <DetallesView>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={29}
          sub={true}
          color={Colors.mainCOlorPurpleLigth}
        >
          Ver detalles de mis fondos
        </StyledText>
      </DetallesView>
    </Container>
  );
}
