import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

const Container = styled.View`
  flex-direction: row;
  width: 90%;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
`;

const RigthContainer = styled.View`
  flex-direction: row;
  column-gap:10px;
  align-items: center;
`;

interface StyledImgProps {
  width: number;
  height: number;
}
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export default function BarraP3() {
  return (
    <Container>
      <StyledImg
        width={85.15}
        height={20.25}
        source={require("../../assets/images/Logo.png")}
      />
      <RigthContainer>
        <Icon name="add" color={Colors.black} size={35} />
        <StyledImg
          width={25}
          height={25}
          source={require("../../assets/images/campanaNegra.png")}
        />
      </RigthContainer>
    </Container>
  );
}
