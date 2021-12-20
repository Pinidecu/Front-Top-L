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
import InfoPersonal from "../../Componentes/InfoPersonal";

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

const ContainerScroll = styled.ScrollView`
  background-color: ${Colors.destacado};
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
  width: 90%;
  justify-content: space-between;
  margin: 10px;
`;
export const ClientesView = styled.View`
  width: 90%;
`;
export const InfoView = styled.View`
  width: 90%;
`;
export const Boton = styled.View`
  width: 90%;
  background-color: ${Colors.mainCOlorPurpleDark};
  border-radius: 8px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  height: 55px;
`;

export default function CertificadoPro({ navigation }: Props) {
  return (
    <ContainerScroll>
      <Container>
        <BarraIconos
          titulo={"1/5 Validación profesional"}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          right={true}
        />
        <TituloView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.mainCOlorPurpleDark}
          >
            Obtener mi certificado Profesional
          </StyledText>
          <StyledText
            size={13}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.textoGris}
          >
            Para obtener tu certificado profesional y comenzar a generar
            ingresos mensuales con TopLive deberás llenar la siguiente
            información requerida, envíar tus documentos y esperar la
            verificación.
          </StyledText>
        </TituloView>
        <InfoView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.mainCOlorPurpleDark}
          >
            Mi información Personal
          </StyledText>
          <InfoPersonal titulo={"Juan José"} />
          <InfoPersonal titulo={"Perez Moreno"} />
          <InfoPersonal titulo={"Tipo de documento"} icon={"expand-more"} />
          <InfoPersonal titulo={"Número de documento"} />
          <InfoPersonal titulo={"País de residencia"} icon={"expand-more"} />
          <InfoPersonal titulo={"Fecha de nacimiento"} icon={"expand-more"} />
          <InfoPersonal titulo={"Lugar de nacimiento"} icon={"expand-more"} />
          <InfoPersonal titulo={"E-mail"} icon={"expand-more"} />
          <InfoPersonal titulo={"Número de teléfono"} icon={"expand-more"} />
        </InfoView>
        <Boton>
          <StyledText
            size={16}
            weight={400}
            fs={"normal"}
            lh={24}
            color={Colors.white}
          >
            CONTINUAR
          </StyledText>
        </Boton>
      </Container>
    </ContainerScroll>
  );
}
