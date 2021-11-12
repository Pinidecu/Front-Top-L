import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface datosPublicacion {
  fotoPerfil: string;
  nombre: string[];
  descripcion: string;
  imagen: string;
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
  border-radius: 8;
  border-color: ${Colors.bordeDestacado};
  border-style: "solid";
  border-width: 1;
`;
const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 10;
  margin: 10px;
  width: 90%;
`;
const StyledImgPerfil = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
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
  top: -5px;
  right: 10px;
`;

const datos: datosPublicacion = {
  fotoPerfil: "https://lorempixel.com/200/200/people/",
  nombre: ["Armando Lopez", "@arlopez21", "2h"],
  descripcion: "Group name lorem ipsum dolor amet sim athem",
  imagen: "https://lorempixel.com/200/200/people/",
};

const MegustaView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  column-gap: 5px;
  width: 90%;
`;

interface Props {
  fotoPerfil: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export default function Publicacion({ fotoPerfil, nombre, descripcion, imagen }: Props) {
  return (
    <Container>
      <StyledBookmark
        width={15}
        height={18}
        source={require("../../assets/images/bookmark.png")}
      />
      <Info>
        <StyledImgPerfil
          width={45}
          height={45}
          radio={"50%"}
          margin={"0"}
          source={{
            uri: fotoPerfil,
          }}
        />
        <Titulo>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {nombre}
          </StyledText>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.black}
          >
            {descripcion}
          </StyledText>
        </Titulo>
      </Info>
      <StyledImg
        width={90}
        height={158.87}
        radio={""}
        margin={"10px"}
        source={{
          uri: imagen,
        }}
      />
      <MegustaView>
        <Icon name="favorite-border" color={Colors.SecondaryGray} size={18} />
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={18}
          color={Colors.SecondaryGray}
        >
          (128)
        </StyledText>
      </MegustaView>
    </Container>
  );
}

