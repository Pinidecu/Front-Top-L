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
  justify-content: space-around;
  column-gap: 10;
  margin-bottom: 10;
  width: 316.74;
`;
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;
const Titulo = styled.View`
  width: 200;
`;
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  font-style: ${(props) => props.fs};
`;

export default function Publicacion() {
  const datos: datosPublicacion = {
    fotoPerfil: "https://lorempixel.com/200/200/people/",
    nombre: ["Armando Lopez", "@arlopez21", "2h"],
    descripcion: "Group name lorem ipsum dolor amet sim athem",
    imagen: "https://lorempixel.com/200/200/people/",
  };
  return (
    <Container>
      <Info>
        <StyledImg
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
        <View>
          <Icon name="bookmark" color="#C2C4EE" size={30} />
          <Icon name="more-horiz" color="#5B74FB" size={30} />
        </View>
      </Info>
      <StyledImg
        width={316.74}
        height={158.87}
        radio={""}
        margin={"10px"}
        source={{
          uri: `${datos.imagen}`,
        }}
      />
    </Container>
  );
}

/* const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 8,
    borderColor: "#C2C4EE",
    borderStyle: "solid",
    borderWidth: 1,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    justifyContent: "space-around",
    marginBottom: 10,
    width: 316.74,
  },
  fotoPerfil: {
    width: 45,
    height: 45,
    borderRadius: "50%",
  },
  icon: {
    position: "absolute",
    top: -10,
    right: 10,
    zIndex: 1,
  },
  titulo: { width: 200 },
  text: {
    fontFamily: "Proxima Nova",
  },
  nombre: {
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#424049",
  },
  descripcion: {
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 18,
    color: "#000000",
  },
  imagen: {
    margin: 10,
    width: 316.74,
    height: 158.87,
  },
}); */
