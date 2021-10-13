import React from "react";
import { StyleSheet, Text, View, Image, addons } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface datosActividad {
  descripcion: string;
  compartido: string;
  foto: string;
}

interface StyledImgProps {
  width: number;
  height: number;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}



const Container = styled.View`
  flex-direction: row;
  align-items: "flex-start";
  justify-content: "flex-start";
  width: "100%";
  margin: 10px 0;
  column-gap: 10;
`;

const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

const Info = styled.View`
  height: "50%";
  justify-content: space-evenly;
`;

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default function Actividad() {
  const datos: datosActividad = {
    descripcion: "Yoga para ti, para mí y para todos! Aeroyogabaq",
    compartido: "@karendagy ha compartido esto hoy",
    foto: "https://lorempixel.com/200/200/people/",
  };

  return (
    <Container>
      <StyledImg
        width={54.93}
        height={54}
        source={{
          uri: `${datos.foto}`,
        }}
      />
      <Info>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={14}
          color={Colors.mainColorBlack}
        >
          {datos.descripcion}
        </StyledText>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={14}
          color={Colors.SecondaryGray}
        >
          {datos.compartido}
        </StyledText>
      </Info>
    </Container>
  );
}
