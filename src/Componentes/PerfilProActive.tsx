import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  titulo: string;
  active: boolean;
}


const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const StyledText = styled.Text`
  color: ${Colors.mainColorBlack};
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 12;
  font-weight: 700;
  line-height: 14;
`;

interface StyledImgProps {
  width: number;
  height: number;
}

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default function PerfilProActive({ titulo, active }: Props) {
  return (
    <Container>
      <StyledText>{titulo}</StyledText>
      {active ? (
        <StyledImg
          width={25}
          height={25}
          source={require("../../assets/images/Bullet-selected.png")}
        />
      ) : (
        <StyledImg
          width={25}
          height={25}
          source={require("../../assets/images/Bullet-select.png")}
        />
      )}
    </Container>
  );
}
