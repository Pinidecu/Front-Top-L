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
import Cronograma2 from "../../Componentes/Cronograma2";

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

export const Edicion = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
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


export default function HorariosTarifas2({ navigation }: Props) {
  return (
    <ScrollView>
      <ContainerPrincipalAgenda>
        <BarraIconos
          titulo={"Horarios y asesorías"}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          threePoints={true}
        />
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
            <StyledImg
              width={25}
              height={19}
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
        <Cronograma2 />
        <Cronograma2 />
        <Edicion>
          <StyledText
            sub={true}
            weight={400}
            size={12}
            lh={29}
            fs={"normal"}
            color={Colors.mainCOlorPurpleLigth}
            margin={0}
          >
            Agregar otra hora
          </StyledText>
          <StyledText
            sub={true}
            weight={400}
            size={12}
            lh={29}
            fs={"normal"}
            color={Colors.mainCOlorPurpleLigth}
            margin={0}
          >
            Eliminar
          </StyledText>
        </Edicion>
      </ContainerPrincipalAgenda>
    </ScrollView>
  );
}
