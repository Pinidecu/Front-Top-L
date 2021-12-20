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

export const CardsView = styled.View`
  width: 90%;
`;
export const CardView = styled.View`
  background-color: ${Colors.white};
  box-shadow: 0px 0px 8px rgba(157, 164, 181, 0.2);
  border-radius: 8px;
  width: 100%;
  align-items: center;
  padding: 10px 0px;
`;

export const TituloView = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
`;

export const DescripcionView = styled.View`
  width: 60%;
`;
export const FechaView = styled.View`
  flex-direction: row;
  width: 90%;
`;

export const Botones = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin: 10px;
`;

export const BotonGris = styled.View`
  border: 1px solid ${Colors.bordeDestacado};
  border-radius: 24px;
  padding: 5px 20px;
  width: 49%;
  align-items: center;
`;

export const BotonAzul = styled.View`
  border: 1px solid ${Colors.mainCOlorPurpleDark};
  border-radius: 24px;
  padding: 5px 20px;
  width: 49%;
  align-items: center;
  background-color: ${Colors.SecondaryPurpleLight};
`;

const IndicadorView = styled.View`
  background-color: ${Colors.ligthGray};
  border-radius: 4px;
  flex-direction: row;
  height: 52px;
  width: 110px;

  padding: 5px;
`;

const LeftView = styled.View`
  width: 65%;
  justify-content: center;
  padding: 5px;
`;
const DatosView = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
`;
const Info = styled.View``;

const ValorView = styled.View``;

export default function Notificaciones({ navigation }: Props) {
  return (
    <ContainerScroll>
      <Container>
        <BarraIconos
          titulo={""}
          margin={"0px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          closeBlack={true}
        />
        <CardsView>
          <CardView>
            <TituloView>
              <DescripcionView>
                <StyledText
                  size={12}
                  weight={400}
                  fs={"normal"}
                  lh={18}
                  color={Colors.mainColorBlack}
                >
                  Su evento
                  <StyledText
                    size={12}
                    weight={700}
                    fs={"normal"}
                    lh={18}
                    color={Colors.mainColorBlack}
                  >
                    {" Aprendamos más sobre el self coaching "}
                  </StyledText>
                  está a punto de comenzar!
                </StyledText>
                <FechaView>
                  <StyledText
                    size={12}
                    weight={700}
                    fs={"normal"}
                    lh={14}
                    color={Colors.mainColorBlack}
                  >
                    Jueves 24 Jun, 2021
                  </StyledText>
                </FechaView>
              </DescripcionView>
              <Icon
                name="more-horiz"
                color={Colors.mainCOlorPurpleLigth}
                size={25}
              />
            </TituloView>

            <Botones>
              <BotonGris>
                <StyledText
                  size={14}
                  weight={400}
                  fs={"normal"}
                  lh={16.8}
                  color={Colors.SecondaryGray}
                >
                  Recordar en 5mins
                </StyledText>
              </BotonGris>
              <BotonAzul>
                <StyledText
                  size={14}
                  weight={400}
                  fs={"normal"}
                  lh={16.8}
                  color={Colors.mainCOlorPurpleDark}
                >
                  Unirme
                </StyledText>
              </BotonAzul>
            </Botones>
          </CardView>
          <CardView>
            <TituloView>
              <DescripcionView>
                <StyledText
                  size={12}
                  weight={700}
                  fs={"normal"}
                  lh={14}
                  color={Colors.mainColorBlack}
                >
                  El evento Seminario live sobre el fitness en el caribe fue re
                  agendado, deseas conservar tu pase Live para el evento?
                </StyledText>
                <FechaView>
                  <StyledText
                    size={12}
                    weight={400}
                    fs={"normal"}
                    lh={18}
                    color={Colors.SecondaryGray}
                  >
                    Bienestar físico
                  </StyledText>
                </FechaView>
              </DescripcionView>
              <IndicadorView>
                <LeftView>
                  <StyledText
                    size={12}
                    weight={400}
                    fs={"normal"}
                    lh={10}
                    color={Colors.mainColorRed}
                  >
                    Asesoría finalizada
                  </StyledText>
                </LeftView>
                <StyledImg
                  width={20}
                  height={20}
                  source={require("../../../assets/images/BulletRed.png")}
                />
              </IndicadorView>
            </TituloView>

            <DatosView>
              <Info>
                <StyledText
                  size={12}
                  weight={700}
                  fs={"normal"}
                  lh={14}
                  color={Colors.black}
                >
                  {"Fecha de evento: "}
                  <StyledText
                    size={12}
                    weight={400}
                    fs={"normal"}
                    lh={14}
                    color={Colors.black}
                  >
                    18/11/2021
                  </StyledText>
                </StyledText>
                <StyledText
                  size={12}
                  weight={700}
                  fs={"normal"}
                  lh={14}
                  color={Colors.black}
                >
                  {"Hora: "}
                  <StyledText
                    size={12}
                    weight={400}
                    fs={"normal"}
                    lh={14}
                    color={Colors.black}
                  >
                    4:00PM
                  </StyledText>
                </StyledText>
                <StyledText
                  size={12}
                  weight={700}
                  fs={"normal"}
                  lh={14}
                  color={Colors.black}
                >
                  {"Tiempo: "}
                  <StyledText
                    size={12}
                    weight={400}
                    fs={"normal"}
                    lh={14}
                    color={Colors.black}
                  >
                    3 horas
                  </StyledText>
                </StyledText>
              </Info>
              <ValorView>
                <StyledText
                  size={12}
                  weight={400}
                  fs={"normal"}
                  lh={14}
                  color={Colors.black}
                >
                  Valor:
                </StyledText>
                <StyledText
                  size={12}
                  weight={400}
                  fs={"normal"}
                  lh={14}
                  color={Colors.black}
                >
                  $120.000{" "}
                  <StyledText
                    size={12}
                    weight={700}
                    fs={"normal"}
                    lh={14}
                    color={Colors.black}
                  >
                    COP
                  </StyledText>
                </StyledText>
              </ValorView>
            </DatosView>
            <Botones>
              <BotonGris>
                <StyledText
                  size={14}
                  weight={400}
                  fs={"normal"}
                  lh={16.8}
                  color={Colors.SecondaryGray}
                >
                  Cancelar
                </StyledText>
              </BotonGris>
              <BotonAzul>
                <StyledText
                  size={14}
                  weight={400}
                  fs={"normal"}
                  lh={16.8}
                  color={Colors.mainCOlorPurpleDark}
                >
                  Agendar nuevamente
                </StyledText>
              </BotonAzul>
            </Botones>
          </CardView>
          <CardView>
            <TituloView>
              <DescripcionView>
                <StyledText
                  size={12}
                  weight={700}
                  fs={"normal"}
                  lh={14}
                  color={Colors.mainColorBlack}
                >
                  Nueva asesoría en tutor de ingles para jovenes +13 años
                  agendada
                </StyledText>
                <FechaView>
                  <StyledText
                    size={12}
                    weight={400}
                    fs={"normal"}
                    lh={18}
                    color={Colors.SecondaryGray}
                  >
                    Educación • Tutoría idiomas
                  </StyledText>
                </FechaView>
              </DescripcionView>
              <IndicadorView>
                <LeftView>
                  <StyledText
                    size={12}
                    weight={400}
                    fs={"normal"}
                    lh={10}
                    color={Colors.mainCOlorPurpleLigth}
                  >
                    Asesoría confirmada
                  </StyledText>
                </LeftView>
                <StyledImg
                  width={20}
                  height={20}
                  source={require("../../../assets/images/BulletBlue.png")}
                />
              </IndicadorView>
            </TituloView>

            <DatosView>
              <Info>
                <StyledText
                  size={12}
                  weight={700}
                  fs={"normal"}
                  lh={14}
                  color={Colors.black}
                >
                  {"Fecha de asesoría: "}
                  <StyledText
                    size={12}
                    weight={400}
                    fs={"normal"}
                    lh={14}
                    color={Colors.black}
                  >
                    18/11/2021
                  </StyledText>
                </StyledText>
                <StyledText
                  size={12}
                  weight={700}
                  fs={"normal"}
                  lh={14}
                  color={Colors.black}
                >
                  {"Hora: "}
                  <StyledText
                    size={12}
                    weight={400}
                    fs={"normal"}
                    lh={14}
                    color={Colors.black}
                  >
                    4:00PM
                  </StyledText>
                </StyledText>
                <StyledText
                  size={12}
                  weight={700}
                  fs={"normal"}
                  lh={14}
                  color={Colors.black}
                >
                  {"Tiempo: "}
                  <StyledText
                    size={12}
                    weight={400}
                    fs={"normal"}
                    lh={14}
                    color={Colors.black}
                  >
                    45 minutos
                  </StyledText>
                </StyledText>
              </Info>
            </DatosView>
          </CardView>
        </CardsView>
      </Container>
    </ContainerScroll>
  );
}
