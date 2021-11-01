import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import styled from "styled-components/native";
import {
  ContainerPrincipal,
  ContainerAgenda,
  Linea,
  TextoConfiguracion,
  ContainerPrincipalLive,
} from "../StyledComponents/StyledComponents";
import ImgLive from "../../Componentes/ImgLive";
import ImgLive2 from "../../Componentes/ImgLive2";
import NavLive, { IconosLive } from "../../Componentes/NavLive";
import NavLiveOpcion2 from "../../Componentes/NavLiveOpcion2";
import ImgLiveOpcion2 from "../../Componentes/ImgLiveOpcion2";
import BarraIconos from "../../Componentes/BarraIconos";
import Colors from "../../../constants/Colors";
import { Icon } from "react-native-elements";
import fotoEvento from "../../../assets/images/evento-detalle.png";
import bookmark from "../../../assets/images/bookmark.png";
import { LinearGradient } from "react-native-svg";
import BotonAzul from "../../Componentes/BotonAzul";
import Publicacion from "../../Componentes/Publicacion";
import PublicacionSinImg from "../../Componentes/PublicacionSinImg";

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
  flex-direction: row;
  align-self: center;
  margin: 10px;
  width: 90%;
  row-gap: 10px;
`;

const TituloLeft = styled.View`
  width: 80%;
  row-gap: 18px;
`;
const TituloRigth = styled.View`
  width: 20%;
  row-gap: 10px;
  align-self: flex-end;
  align-items: center;
`;

const IconView = styled.View`
  background-color: ${Colors.SecondaryLightGray};
  border-radius: 4px;
  width: 60px;
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const InfoView = styled.View`
  width: 90%;
  align-self: center;
  row-gap: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const PublicacionView = styled.View`
  width: 90%;
  justify-content: space-between;
  align-self: center;
  margin-top: 10px;
  row-gap: 5px;
`;

const TituloPublicacionView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-top: 5px;
`;

const DescripcionView = styled.View`
  width: 90%;
  align-self: center;
  margin: 10px;
  row-gap: 10px;
`;

const NotaView = styled.View`
  width: 90%;
  align-self: center;
  margin: 10px;
  padding-bottom: 20px;
  row-gap: 10px;
`;

export default function EventoDetalle({ navigation }: Props) {
  return (
    <ContainerPrincipalLive>
      <BarraIconos
        titulo={""}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleDark}
        threePoints={true}
        lupa={true}
        add={true}
      />
      <ImageView foto={fotoEvento}>
        <StyledImg
          width={38}
          height={45}
          source={require("../../../assets/images/bookmark.png")}
        />
      </ImageView>
      <TituloView>
        <TituloLeft>
          <StyledText
            size={24}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.mainColorBlack}
          >
            Aprendamos más sobre el self coaching
          </StyledText>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.mainCOlorPurpleLigth}
          >
            Category • Nombre del creador
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
        </TituloLeft>
        <TituloRigth>
          <IconView>
            <Icon
              name="favorite-border"
              color={Colors.SecondaryGray}
              size={18}
            />
            <StyledText
              size={12}
              weight={400}
              fs={"normal"}
              lh={18}
              color={Colors.SecondaryGray}
            >
              (128)
            </StyledText>
          </IconView>
          <IconView>
            <Icon name="send" color={Colors.SecondaryGray} size={18} />
            <StyledText
              size={12}
              weight={400}
              fs={"normal"}
              lh={18}
              color={Colors.SecondaryGray}
            >
              (128)
            </StyledText>
          </IconView>
        </TituloRigth>
      </TituloView>
      <InfoView>
        <StyledText
          size={14}
          weight={700}
          fs={"normal"}
          lh={18}
          color={Colors.black}
        >
          Fecha:
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.black}
          >
            {" Jueves 24 Jun, 2021"}
          </StyledText>
        </StyledText>
        <Linea />
        <StyledText
          size={14}
          weight={700}
          fs={"normal"}
          lh={18}
          color={Colors.black}
        >
          Hora de inicio:
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.black}
          >
            {" 1:00 PM"}
          </StyledText>
        </StyledText>
        <Linea />
        <StyledText
          size={14}
          weight={700}
          fs={"normal"}
          lh={18}
          color={Colors.black}
        >
          Hora de fin :
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.black}
          >
            {" 3:00 PM"}
          </StyledText>
        </StyledText>
        <Linea />
        <StyledText
          size={14}
          weight={700}
          fs={"normal"}
          lh={18}
          color={Colors.black}
        >
          Entrada:
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.black}
          >
            {" Gratis"}
          </StyledText>
        </StyledText>
        <Linea />
        <StyledText
          size={14}
          weight={700}
          fs={"normal"}
          lh={18}
          color={Colors.black}
        >
          Tipo:
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.black}
          >
            {" Abierto al público"}
          </StyledText>
        </StyledText>
      </InfoView>
      <BotonAzul ancho={343} alto={55} texto={"UNIRME AL EVENTO LIVE"} />
      <PublicacionView>
        <TituloPublicacionView>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.black}
          >
            Publicaciones sobre el evento
          </StyledText>
          <Icon
            name="more-horiz"
            color={Colors.mainCOlorPurpleLigth}
            size={25}
          />
        </TituloPublicacionView>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={14}
          color={Colors.textoGris}
        >
          Aquí encontrarás toda la información y publicaciones sobre éste evento
          live.
        </StyledText>
      </PublicacionView>

      <DescripcionView>
        <StyledText
          size={14}
          weight={700}
          fs={"normal"}
          lh={18}
          color={Colors.mainColorBlack}
        >
          Descripción del evento
        </StyledText>
        <StyledText
          size={14}
          weight={400}
          fs={"normal"}
          lh={16.8}
          color={Colors.mainColorBlack}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          malesuada fringilla metus at tincidunt. Proin nec massa nec arcu
          efficitur fermentum. Fusce imperdiet feugiat felis, in ullamcorper
          quam accumsan ac. Maecenas quis neque sed velit hendrerit facilisis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
          consequat dui, non consectetur justo.
        </StyledText>
      </DescripcionView>
      <NotaView>
        <PublicacionSinImg />
        <Publicacion />
      </NotaView>
    </ContainerPrincipalLive>
  );
}
