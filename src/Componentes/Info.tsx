import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface datosInfo {
  nombre: string;
  profesion: string;
  foto: string;
  rubros: string[];
  tags: string[];
}
interface StyledImgProps {
  width: number;
  height: number;
  radio: string;
}
interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const Container = styled.View`
  background-color: ${Colors.white};
  align-items: center;
  justify-content: space-around;
  height: 185;
  width: 344;
  border-radius: 8;
`;
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  position: absolute;
  top: -40;
  z-index: 1;
`;
const IconView = styled.View`
  position: absolute;
  top: -10;
  right: 10;
  z-index: 1;
`;
const Datos = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 185;
  padding-top: 40;
  padding-bottom: 20;
`;
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  text-align: center;
  width: 60%;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;


export default function Info() {
  const datos: datosInfo = {
    nombre: "Alejandra Martinez Ruiz",
    profesion: "Instructora de yoga",
    foto: "https://lorempixel.com/200/200/people/",
    rubros: ["Yoga", "Meditacion holística"],
    tags: [
      "#uxui",
      "#freelance",
      "#uxdesign",
      "#Educación",
      "#Webdesign",
      "#culturadigital",
    ],
  };
  return (
    <Container>
      <StyledImg
        width={80}
        height={80}
        radio={"50%"}
        source={{
          uri: `${datos.foto}`,
        }}
      />
      <IconView>
        <Icon
          name="bookmark"
          color="#C2C4EE"
          size={40}
          onPress={() => console.log("hello")}
        />
      </IconView>
      <Datos>
        <StyledText 
          size={16}
          weight={700}
          fs={"normal"}
          lh={24}
          color={Colors.mainCOlorBlack}>{datos.nombre}
        </StyledText>
        <StyledText 
          size={12}
          weight={700}
          fs={"normal"}
          lh={14}
          color={Colors.mainCOlorBlack}
        >{datos.profesion}</StyledText>
        <StyledText 
          size={12}
          weight={400}
          fs={"normal"}
          lh={14}
          color={Colors.mainCOlorPurpleLigth}>
          {datos.rubros.join("  •  ")}
        </StyledText>
        <LinearGradient colors={["#6560F0", "#7F8FFF"]} style={styles.linea} />
        <StyledText 
          size={12}
          weight={400}
          fs={"normal"}
          lh={14}
          color={Colors.SecondaryGray}
        >{datos.tags.join(", ")}</StyledText>
      </Datos>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-around",
    height: 185,
    width: 344,
    borderRadius: 8,
  },
  datos: {
    alignItems: "center",
    justifyContent: "space-around",
    height: 185,
    paddingTop: 40,
    paddingBottom: 20,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
    position: "absolute",
    top: -40,
    zIndex: 1,
  },
  icon: {
    position: "absolute",
    top: -10,
    right: 10,
    zIndex: 1,
  },
  text: {
    textAlign: "center",
    fontFamily: "Proxima Nova",
    width: "60%",
  },
  nombre: {
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "#424049",
  },
  profesion: {
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#424049",
  },
  rubros: {
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#5B74FB",
  },
  tags: {
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#7E8FB9",
  },
  linea: {
    backgroundColor: "#6560F0",
    width: 21,
    height: 3,
    borderRadius: 10,
  },
});
