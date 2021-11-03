import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface datosEquipoPublicacion {
  fotoPerfil: string;
  titulo: string;
  tags: string;
  imagen: string;
  meGusta: string;
}
interface StyledImgProps {
  width: number;
  height: number;
  radio: any;
  margin: string;
  left: number;
}
interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
  fs: string;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 33vh;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 0px 0px 4px rgba(180, 188, 206, 0.5);
`;
const ImgView = styled.View`
  width: 100%;
  height: 65%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Info = styled.View`
  margin: 10px;
  width: 90%;
  row-gap: 5px;
`;

const StyledImgPerfil = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vw;
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
  position: absolute;
  left: ${(props) => props.left}px;
`;
const StyledImg = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  font-style: ${(props) => props.fs};
`;

const StyledBookmark = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  bottom: -26px;
  right: 10px;
`;

const datos: datosEquipoPublicacion = {
  fotoPerfil: "https://lorempixel.com/200/200/people/",
  titulo: "Yoga para ti, para mí y para todos! Aeroyogabaq",
  tags: "Bienestar físico •  Alexandra Martinez",
  imagen: "https://lorempixel.com/200/200/people/",
  meGusta: "tú y 6770 personas más asistirán a ésta sala",
};

const MegustaView = styled.View`
  flex-direction: row;
  width: 90%;
  height: 40px;
  column-gap: 10px;
`;

const ImagenesViews = styled.View`
  width: 35%;
  justify-content: center;
`;
const TextoViews = styled.View`
  width: 65%;
  justify-content: center;
`;

interface Props {
  titulo: string;
  tags: string;
  imagen: string;
  meGusta: string;
}

export default function EquipoPublicacion({
  titulo,
  tags,
  imagen,
  meGusta,
}: Props) {
  return (
    <Container>
      <ImgView>
        <StyledImg
          width={90}
          height={158.87}
          radio={""}
          margin={"10px"}
          source={{
            uri: `${datos.imagen}`,
          }}
        />
        <StyledBookmark
          width={30}
          height={37}
          source={require("../../assets/images/bookmark-clicked.png")}
        />
      </ImgView>
      <Info>
        <StyledText
          size={14}
          weight={400}
          fs={"normal"}
          lh={16.8}
          color={Colors.black}
        >
          {titulo}
        </StyledText>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={14}
          color={Colors.mainCOlorPurpleLigth}
        >
          {tags}
        </StyledText>

        <MegustaView>
          <ImagenesViews>
            <StyledImgPerfil
              width={9}
              height={9}
              radio={"50%"}
              margin={"0"}
              left={0}
              source={require("../../assets/images/Sala/10.png")}
            />
            <StyledImgPerfil
              width={9}
              height={9}
              radio={"50%"}
              margin={"0"}
              left={20}
              source={require("../../assets/images/Sala/8.png")}
            />
            <StyledImgPerfil
              width={9}
              height={9}
              radio={"50%"}
              margin={"0"}
              left={40}
              source={require("../../assets/images/Sala/7.png")}
            />
            <StyledImgPerfil
              width={9}
              height={9}
              radio={"50%"}
              margin={"0"}
              left={60}
              source={require("../../assets/images/Sala/9.png")}
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
              {meGusta}
            </StyledText>
          </TextoViews>
        </MegustaView>
      </Info>
    </Container>
  );
}
