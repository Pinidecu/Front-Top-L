import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../../../../constants/Colors";

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
  border: 1px solid ${Colors.bordeDestacado};
`;
const Info = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  column-gap:10px;
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
  row-gap:5px;
  justify-content: flex-start;
  align-items: flex-start;
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


const MegustaView = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap:5px;
`;

const ActionsView = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface Props {
  fotoPerfil: string;
  nombre: string;
  descripcion: string;
  puntuacion: string;
  reviews: string;
  titulo: string;
}

export default function PublicacionSinImg({
  fotoPerfil,
  titulo,
  nombre,
  descripcion,
  puntuacion,
  reviews,
}: Props) {
  return (
    <Container>
      <StyledBookmark
        width={15}
        height={18}
        source={require("../../../../../assets/images/bookmark.png")}
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
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.mainColorBlack}
          >
            {titulo}
          </StyledText>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.black}
          >
            {descripcion}
            <StyledText
              size={12}
              weight={700}
              fs={"normal"}
              lh={14}
              color={Colors.mainCOlorPurpleLigth}
            >
              {` ${nombre}`}
            </StyledText>
          </StyledText>
          <MegustaView>
            <StyledImgIcon
              width={15}
              height={15}
              source={require("../../../../../assets/images/estrella.png")}
            />
            <StyledText
              size={14}
              weight={700}
              fs={"normal"}
              lh={18}
              color={Colors.mainCOlorPurpleDark}
            >
              {puntuacion}
            </StyledText>
            <StyledText
              size={12}
              weight={400}
              fs={"normal"}
              lh={18}
              color={Colors.SecondaryGray}
            >
              {reviews}
            </StyledText>
          </MegustaView>
        </Titulo>
      </Info>
    </Container>
  );
}
