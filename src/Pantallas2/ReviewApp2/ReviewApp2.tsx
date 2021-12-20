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
import fotoPerfil from "../../../assets/images/Sala/9.png";
import Calificacion from "../../Componentes/Calificacion";
import Review from "../../Componentes/Review";
import { Linea } from "../../Pantallas/StyledComponents/StyledComponents";
import Estrellas from "../../Componentes/Estrellas";
import PublicacionSinImg from "../../Componentes/PublicacionSinImg";
import fotoPerfilPublicacion from "../../../assets/images/Sala/10.png";

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
  width: 90%;
  justify-content: space-between;
  margin: 10px;
`;
export const AgregarView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const InfoView = styled.View`
  width: 90%;
`;
export const AsesoriaView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
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
export const BotonBlanco = styled.View`
  width: 90%;
  background-color: ${Colors.white};
  border-radius: 8px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  height: 55px;
  border: 1px solid ${Colors.mainCOlorPurpleDark};
`;
export const CalificacionView = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CalificacionLeft = styled.View``;
export const Calificacionright = styled.View`
  flex-direction: row;
  background-color: ${Colors.destacado};
  border-radius: 4px;
  width: 130px;
  height: 52px;
  align-items: center;
  justify-content: center;
`;

const ContainerMegusta = styled.View`
  width: 90%;
`;
const MegustaView = styled.View`
  flex-direction: row;
  width: 60%;
  height: 40px;

  margin: 10px 0px;
  justify-content: left;
  align-self: flex-start;
`;

const ImagenesViews = styled.View`
  width: 100px;
  justify-content: center;
`;

interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
  fs: string;
}

const StyledImgPerfil = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vw;
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
  position: absolute;
  left: ${(props) => props.left}px;
`;

const TextoViews = styled.View`
  width: 65%;
  justify-content: center;
`;

const PublicacionView = styled.View`
  width: 90%;
  justify-content: space-between;
  align-self: center;
  margin-top: 10px;
`;

export default function ReviewApp2({ navigation }: Props) {
  return (
    <ContainerScroll>
      <Container>
        <BarraIconos
          titulo={"Reviews"}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          threePoints={true}
        />
        <TituloView>
          <Review
            titulo={"Consulta yoga principiante"}
            tags={"Yoga  • Vinyasa Yoga"}
            foto={fotoPerfil}
          />
          <Linea />
        </TituloView>
        <CalificacionView>
          <CalificacionLeft>
            <StyledText
              size={16}
              weight={700}
              fs={"normal"}
              lh={24}
              color={Colors.mainCOlorPurpleDark}
            >
              Buena calidad!
            </StyledText>
            <Estrellas estrellas={4.5} />
          </CalificacionLeft>
          <Calificacionright>
            <StyledImg
              width={20}
              height={20}
              source={require("../../../assets/images/estrellaLlena.png")}
            />
            <StyledText
              size={24}
              weight={700}
              fs={"normal"}
              lh={24}
              color={Colors.mainCOlorPurpleDark}
            >
              4.5
            </StyledText>
          </Calificacionright>
        </CalificacionView>
        <ContainerMegusta>
          <MegustaView>
            <ImagenesViews>
              <StyledImgPerfil
                width={9}
                height={9}
                radio={"50%"}
                margin={"0"}
                left={0}
                source={require("../../../assets/images/Sala/10.png")}
              />
              <StyledImgPerfil
                width={9}
                height={9}
                radio={"50%"}
                margin={"0"}
                left={20}
                source={require("../../../assets/images/Sala/8.png")}
              />
              <StyledImgPerfil
                width={9}
                height={9}
                radio={"50%"}
                margin={"0"}
                left={40}
                source={require("../../../assets/images/Sala/7.png")}
              />
              <StyledImgPerfil
                width={9}
                height={9}
                radio={"50%"}
                margin={"0"}
                left={60}
                source={require("../../../assets/images/Sala/9.png")}
              />
            </ImagenesViews>
            <TextoViews>
              <StyledText
                size={12}
                weight={400}
                fs={"normal"}
                lh={14}
                color={Colors.SecondaryGray}
              >
                6770 personas más recomiendan esta asesoría.
              </StyledText>
            </TextoViews>
          </MegustaView>
        </ContainerMegusta>
        <PublicacionView>
          <PublicacionSinImg
            fotoPerfil={fotoPerfilPublicacion}
            nombre={"Armando Lopez • @arlopez21 • 2h"}
            descripcion={"Group name lorem ipsum dolor amet sim athem"}
          />
          <PublicacionSinImg
            fotoPerfil={fotoPerfilPublicacion}
            nombre={"Armando Lopez • @arlopez21 • 2h"}
            descripcion={"Group name lorem ipsum dolor amet sim athem"}
          />
          <PublicacionSinImg
            fotoPerfil={fotoPerfilPublicacion}
            nombre={"Armando Lopez • @arlopez21 • 2h"}
            descripcion={"Group name lorem ipsum dolor amet sim athem"}
          />
        </PublicacionView>
      </Container>
    </ContainerScroll>
  );
}
