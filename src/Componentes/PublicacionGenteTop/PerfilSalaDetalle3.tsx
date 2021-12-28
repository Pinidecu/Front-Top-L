import React from "react";
import { Text, View, Image, addons } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

interface datosPerfilSalaDetalle {
  nombre: string;
  usuarios: string;
  foto: string;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

const LeftContainer = styled.View`
  flex-direction: row;
  width:80%;
  align-items: center;
`;

const Mas = styled.View`
  width: 16px;
  height: 16px;
  margin: 0px;
  background-color: ${Colors.SecondaryPurpleLight};
  border-radius: 50%;
  position: absolute;
  bottom: -4px;
  left: 12px;
`;
const Info = styled.View`
  justify-content: center;
`;

const UsersContainer = styled.View`
  flex-direction: row;

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

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
`;

export default function PerfilSalaDetalle3() {
  return (
    <Container>
      <LeftContainer>
        <StyledText
          size={16}
          weight={700}
          fs={"normal"}
          lh={20}
          color={Colors.mainColorBlack}
        >
          El Yoga como filosofia de vida y harmonía con el universo para ti,
          para mí y para todos! Aeroyogabaq
        </StyledText>
      </LeftContainer>
      <StyledImg
        width={40}
        height={40}
        radio={"50%"}
        source={require("../../../assets/images/AddCall.png")}
      />
    </Container>
  );
}
