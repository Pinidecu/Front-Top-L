import React from "react";
import { StyleSheet, Text, View, Image, addons } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

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
  margin-top: 5px;
  padding: 0 20px;
  column-gap: 10;
`;

const LeftContainer = styled.View`
  flex-direction: row;
  column-gap: 10px;
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
  column-gap: 5px;
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


export default function PerfilSalaDetalle() {
  const datos: datosPerfilSalaDetalle = {
    nombre: "Alejandra Martinez Ruiz",
    usuarios: "9 lives users",
    foto: "https://lorempixel.com/200/200/people/",
  };

  return (
    <Container>
      <LeftContainer>
          <StyledImg
            width={40}
            height={40}
            radio={"50%"}
            source={{
              uri: `${datos.foto}`,
            }}
          />
          <Mas>
            <StyledImg
              width={16}
              height={16}
              radio={"50%"}
              source={require("../../assets/images/mas.svg")}
            />
          </Mas>
        <Info>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.mainColorBlack}
          >
            {datos.nombre}
          </StyledText>
          <UsersContainer>
            <Icon
              type="ionicon"
              name="eye-outline"
              color={Colors.mainCOlorPurpleDark}
              size={20}
            />
            <StyledText
              size={14}
              weight={400}
              fs={"normal"}
              lh={16.8}
              color={Colors.mainCOlorPurpleDark}
            >
              {datos.usuarios}
            </StyledText>
          </UsersContainer>
        </Info>
      </LeftContainer>
      <StyledImg
        width={40}
        height={40}
        radio={"50%"}
        source={require("../../assets/images/AddCall.png")}
      />
    </Container>
  );
}
