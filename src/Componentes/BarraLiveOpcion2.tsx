import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";



interface datosBarraLive2 {
  fotoPerfil: string;
  nombre: string;
  usuario: string;
  hora: string;
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
  fs: string;
  lh: number;
  color: string;
}

const Container = styled.View`
  flex-direction: row;
  width: 90%;
  height: 40px;
  align-self: center;
  margin: 20px;
  background-color: ${Colors.fondoBarraLive2};
  border-radius: 100px;
  justify-content: space-between;
  align-items: center;
`;
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

const ViewNombres = styled.View`
justify-content: center;
`;
const LeftContainer = styled.View`
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;
const RightContainer = styled.View`
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  margin: 10px;
`;

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;

const datos: datosBarraLive2 = {
  fotoPerfil: "https://lorempixel.com/200/200/people/",
  nombre: "Ricarzo Zambrano Pión",
  usuario: "@ricardocoach",
  hora: "00:31:21",
};

export default function BarraLiveOpcion2() {
  return (
    <Container>
      <LeftContainer>
      <StyledImg
        width={40}
        height={45}
        radio={"50%"}
        margin={"0"}
        source={{
          uri: `${datos.fotoPerfil}`,
        }}
      />
      <ViewNombres>
        <StyledText
          size={12}
          weight={700}
          fs={"normal"}
          lh={14}
          color={Colors.mainCOlorPurpleDark}
        >
          {datos.nombre}
        </StyledText>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={14}
          color={Colors.mainCOlorPurpleDark}
        >
          {datos.usuario}
        </StyledText>
      </ViewNombres>
      </LeftContainer>
      <RightContainer>
      <Icon
        name="time-outline"
        type={"ionicon"}
        color={Colors.mainCOlorPurpleLigth}
        size={20}
      />
      <StyledText
        size={14}
        weight={400}
        fs={"normal"}
        lh={16.8}
        color={Colors.mainColorBlack}
      >
        {datos.hora}
      </StyledText>
      </RightContainer>
    </Container>
  );
}

