import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface datosDestacado {
  titulo: string;
  lugar: string;
  descripcion: string;
  foto: string;
}

interface ContainerProps {
  color: string;
  borderColor: string;
}
interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
  fs: string;
}

interface StyledImgProps {
  width: number;
  height: number;
  radio: string;
}

const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.color};
  align-items: flex-start;
  justify-content: space-evenly;
  height: 130;
  width: 270;
  border-radius: 8;
  border-color: ${(props) => props.borderColor};
  border-style: "solid";
  border-width: 1;
  padding: 10px;
`;

const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  font-style: ${(props) => props.fs};
  width: "60%";
`;

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  position: absolute;
  top: 15;
  right: 15;
`;

export default function Destacado() {
  const datos: datosDestacado = {
    titulo: "Dra Alejandra website profesional",
    lugar: "Website",
    descripcion:
      "Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum.",
    foto: "https://lorempixel.com/200/200/people/",
  };
  return (
    <Container color={Colors.destacado} borderColor={Colors.bordeDestacado}>
      <StyledText
        size={14}
        weight={400}
        fs={"normal"}
        lh={16.8}
        color={Colors.mainCOlorBlack}
      >
        {datos.titulo}
      </StyledText>
      <StyledText
        size={12}
        weight={400}
        fs={"normal"}
        lh={14}
        color={Colors.SecondaryGray}
      >
        {datos.lugar}
      </StyledText>
      <StyledText
        size={12}
        weight={400}
        fs={"normal"}
        lh={14}
        color={Colors.mainCOlorBlack}
      >
        {datos.descripcion}
      </StyledText>
      <StyledImg
        width={40}
        height={40}
        radio={"50%"}
        source={{
          uri: `${datos.foto}`,
        }}
      />
    </Container>
  );
}

/* const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F8FD",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    height: 130,
    width: 270,
    borderRadius: 8,
    borderColor: "#C2C4EE",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    position: "absolute",
    top: 15,
    right: 15,
  },
  text: {
    fontFamily: "Proxima Nova",
  },
  nombre: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 16.8,
    color: "#424049",
    width: "60%",
  },
  lugar: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#7E8FB9",
    width: "60%",
  },
  descripcion: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#424049",
  },
}); */
