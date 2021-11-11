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
interface StyledImgIconProps {
  width: number;
  height: number;
}
const StyledImgIcon = styled.Image<StyledImgIconProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
  margin-left: 35%;
  margin-bottom: 5px;
  column-gap: 20px;
  width: 90%;
`;

const ActionsView = styled.View`
  flex-direction: row;
  column-gap: 3px;
  align-items: center;
`;

export default function PublicacionSinImg() {
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
            uri: `${datos.fotoPerfil}`,
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
            {datos.nombre.join("  •  ")}
          </StyledText>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.black}
          >
            {datos.descripcion}
          </StyledText>
        </Titulo>
      </Info>
      <MegustaView>
        <ActionsView>
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
        </ActionsView>
        <ActionsView>
          <StyledImgIcon
            width={15}
            height={15}
            source={require("../../assets/images/comentario.png")}
          />
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.SecondaryGray}
          >
            Responder
          </StyledText>
        </ActionsView>
      </MegustaView>
    </Container>
  );
}
