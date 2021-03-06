import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import styled from "styled-components/native";
import {
  ContainerPrincipal,
  ContainerAgenda,
  Linea,
  TextoConfiguracion,
  ContainerPrincipalLive,
  ContainerPrincipalEquipoDetalle,
} from "../StyledComponents/StyledComponents";
import ImgLive from "../../Componentes/ImgLive";
import ImgLive2 from "../../Componentes/ImgLive2";
import NavLive, { IconosLive } from "../../Componentes/NavLive";
import NavLiveOpcion2 from "../../Componentes/NavLiveOpcion2";
import ImgLiveOpcion2 from "../../Componentes/ImgLiveOpcion2";
import BarraIconos from "../../Componentes/BarraIconos";
import Colors from "../../../constants/Colors";
import { Icon } from "react-native-elements";
import fotoEquipo from "../../../assets/images/Equipo1.png";
import badge from "../../../assets/images/badge.png";
import { LinearGradient } from "react-native-svg";
import Servicio from "../../Componentes/Servicio";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

interface ImageViewProps {
  foto: string;
}

const ImageView = styled.View<ImageViewProps>`
  /* 
  background-color: red; */
  background-image: url(${({ foto }) => foto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 244px;
  z-index: 1;
`;

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  text-align: justify;
`;

interface StyledImgProps {
  width: number;
  height: number;
}

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  bottom: -32px;
  right: 20px;
`;

const TituloView = styled.View`
  align-self: center;
  width: 100%;
  background-color: ${Colors.SecondaryPurpleLight};
  padding: 15px;
`;

interface StyledImgPerfilProps {
  width: number;
  height: number;
  radio: any;
  margin: string;
  left: number;
}

const StyledImgPerfil = styled.Image<StyledImgPerfilProps>`
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vw;
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
  position: absolute;
  left: ${(props) => props.left}px;
`;
const MegustaView = styled.View`
  flex-direction: row;
  width: 90%;
  height: 40px;
  :10px ;
`;
const ImagenesViews = styled.View`
  width: 30%;
  justify-content: center;
`;
const TextoViews = styled.View`
  width: 65%;
  justify-content: center;
`;

const Pesta??asView = styled.View`
  background-color: ${Colors.fondoBarraLive2};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
`;
const Pesta??aView = styled.View`
  align-items: center;
`;

const PublicacionView = styled.View`
  width: 90%;
  justify-content: space-between;
  align-self: center;
  margin-top: 10px;
`;

const TituloPublicacionView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-top: 5px;
`;

const NotaView = styled.View`
  width: 90%;
  align-self: center;
  margin: 10px;
  padding-bottom: 20px;
`;

export default function EquipoDetalle2({ navigation }: Props) {
  return (
    <ScrollView style={{ backgroundColor: Colors.white }}>
      <ContainerPrincipalEquipoDetalle>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Salas");
          }}
        >
          <BarraIconos
            titulo={"Mi equipo"}
            margin={"0px"}
            colorIcons={Colors.mainCOlorPurpleLigth}
            threePoints={true}
            add={true}
          />
        </TouchableOpacity>
        <ImageView foto={fotoEquipo}>
          <StyledImg
            width={38}
            height={45}
            source={require("../../../assets/images/bookmark.png")}
          />
        </ImageView>
        <TituloView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={18}
            color={Colors.mainColorBlack}
          >
            Aeroyoga Barranquilla @aeroyogabaq
          </StyledText>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.mainCOlorPurpleLigth}
          >
            Bienestar f??sico ??? Alexandra Martinez
          </StyledText>
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
                t?? y 10 personas hacen parte del elquipo Aeroyogabaq
              </StyledText>
            </TextoViews>
          </MegustaView>
        </TituloView>
        <Pesta??asView>
          <Pesta??aView>
            <StyledText
              size={16}
              weight={400}
              fs={"normal"}
              lh={24}
              color={Colors.SecondaryGray}
            >
              Publicaciones
            </StyledText>
          </Pesta??aView>
          <Pesta??aView>
            <StyledText
              size={16}
              weight={700}
              fs={"normal"}
              lh={29}
              color={Colors.mainCOlorPurpleLigth}
            >
              Servicios
            </StyledText>
            <LinearGradient
              colors={["#6560F0", "#7F8FFF"]}
              style={{
                backgroundColor: "#6560F0",
                width: 21,
                height: 3,
                borderRadius: 10,
              }}
            />
          </Pesta??aView>
        </Pesta??asView>
        <PublicacionView>
          <TituloPublicacionView>
            <StyledText
              size={16}
              weight={700}
              fs={"normal"}
              lh={24}
              color={Colors.black}
            >
              Servicios y tarifas
            </StyledText>
            <Icon
              name="more-horiz"
              color={Colors.mainCOlorPurpleLigth}
              size={25}
            />
          </TituloPublicacionView>
        </PublicacionView>

        <NotaView>
          <Servicio
            titulo={"Consulta Psicolog??a"}
            tags={"Psicolog??a ???  9 a??os experto "}
            icono={"../../assets/images/badge.png"}
            valor={"$80.000"}
            moneda={"COP"}
          />
          <Servicio
            titulo={"Consulta Psicolog??a"}
            tags={"Psicolog??a ???  9 a??os experto "}
            icono={"../../assets/images/badge.png"}
            valor={"$80.000"}
            moneda={"COP"}
          />
        </NotaView>
      </ContainerPrincipalEquipoDetalle>
    </ScrollView>
  );
}
