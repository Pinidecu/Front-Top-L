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
} from "../StyledComponents/StyledComponents";
import Boton from "../../Componentes/Boton";
import Colors from "../../../constants/Colors";
import DiaAgenda from "../../Componentes/DiaAgenda";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import Cronograma from "../../Componentes/Cronograma";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

export const TextView = styled.View`
  justify-content: center;
  width: 90%;
  align-self: center;
  margin: 5px;
`;

export const Eventos = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  align-self: center;
`;

interface StyledImgProps {
  width: number;
  height: number;
  radio: string;
}

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  position: absolute;
  top: -40;
  z-index: 1;
`;
export const NotiView = styled.View`
  flex-direction: row;
  :10px ;
  align-items: center;
  justify-content: space-space-between;
  align-self: center;
  margin: 10px 0px;
`;

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
  margin: number;
}
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin}px 0px;
`;
interface StyledImgIconProps {
  width: number;
  height: number;
}
const StyledImgIcon = styled.Image<StyledImgIconProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default function HorariosTarifas({ navigation }: Props) {
  return (
    <ScrollView>
      <ContainerPrincipalAgenda>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => {
            navigation.navigate("EventoDetalle");
          }}
        >
          <BarraIconos
            titulo={"Horarios y asesorías"}
            margin={"0px"}
            colorIcons={Colors.mainCOlorPurpleLigth}
            threePoints={true}
            add={true}
          />
        </TouchableOpacity>
        <TextView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.SecondaryGray}
            margin={5}
          >
            {"Horario de disponibilidad"}
          </StyledText>
          <StyledText
            size={13}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.textoGris}
            margin={5}
          >
            {
              "Configure un horario para que los usuarios puedan agendar asesorías con usted. Solo recibirá solicitudes de asesorías en los horarios que usted indique como disponibles."
            }
          </StyledText>
        </TextView>
        <Linea />
        <TextView>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.black}
            margin={5}
          >
            {
              "Estoy disponible para brindar asesorías ésta semana de 1 al 8 de abril 2021 en siguiente horario:"
            }
          </StyledText>
          <NotiView>
            <StyledImgIcon
              width={25}
              height={17}
              source={require("../../../assets/images/SF.png")}
            />
            <StyledText
              size={12}
              weight={700}
              fs={"normal"}
              lh={10}
              color={Colors.SecondaryGray}
              margin={5}
            >
              {
                "Deseo recibir notificaciones de asesorías fuera del horario establecido"
              }
            </StyledText>
          </NotiView>
        </TextView>
        <DiaAgenda
          ancho={90}
          alto={54}
          texto={"Martes 21 de julio"}
          icon={"expand-less"}
        />
        <Cronograma />
        <DiaAgenda
          ancho={90}
          alto={54}
          texto={"Miercoles 22 de julio"}
          icon={"expand-more"}
        />
        <DiaAgenda
          ancho={90}
          alto={54}
          texto={"Jueves 23 de julio"}
          icon={"expand-more"}
        />
        <DiaAgenda
          ancho={90}
          alto={54}
          texto={"Viernes 24 de julio"}
          icon={"expand-more"}
        />
        <DiaAgenda
          ancho={90}
          alto={54}
          texto={"Sábado 25 de julio"}
          icon={"expand-more"}
        />
        <DiaAgenda
          ancho={90}
          alto={54}
          texto={"Domingo 26 de julio"}
          icon={"expand-more"}
        />
      </ContainerPrincipalAgenda>
    </ScrollView>
  );
}
