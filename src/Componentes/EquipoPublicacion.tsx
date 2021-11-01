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
  height: 259px;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 0px 0px 4px rgba(180, 188, 206, 0.5);
`;
const Info = styled.View`
  margin: 10px;
  width: 90%;
  row-gap: 5px;
  background-color: red;
`;
const StyledImgPerfil = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;
const StyledImg = styled.Image`
  width: 100%;
  height: 65%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const Titulo = styled.View`
  width: 80%;
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
  top: 55.5%;
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
  column-gap: 5px;
  width: 90%;
  align-items: center;
  background-color: black;
`;

export default function EquipoPublicacion() {
  return (
    <Container>
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
      <Info>
        <StyledText
          size={14}
          weight={400}
          fs={"normal"}
          lh={16.8}
          color={Colors.black}
        >
          {datos.titulo}
        </StyledText>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={14}
          color={Colors.mainCOlorPurpleLigth}
        >
          {datos.tags}
        </StyledText>

        <MegustaView>
          <StyledImgPerfil
            width={35}
            height={35}
            radio={"50%"}
            margin={"0"}
            source={{
              uri: `${datos.fotoPerfil}`,
            }}
          />
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.SecondaryGray}
          >
            {datos.meGusta}
          </StyledText>
        </MegustaView>
      </Info>
    </Container>
  );
}
