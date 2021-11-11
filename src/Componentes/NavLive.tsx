import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Icon } from "react-native-elements";

interface ContainerProps {
  color: string;
}

const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.color};
  opacity: 0.92;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  column-gap: 10px;
  height: 15vh;
  width: 100%;
  position: absolute;
  bottom: 0vh;
`;

interface StyledILProps {
  color: string;
}
export const IconosLive = styled.View<StyledILProps>`
  background-color: ${(props) => props.color};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 4px rgba(180, 188, 206, 0.5);
`;


interface IndicatorProps {
  color: string;
}
const Indicator = styled.View <IndicatorProps>`
  background-color: ${(props) => props.color};
  border-radius: 10px;
  height: 5px;
  width: 137px;
  position: absolute;
  top:-2.5px;
  left:10px;
`;

interface StyledImgProps {
  width: number;
  height: number;
}

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default function NavLive() {
  return (
    <Container color={Colors.white}>
      <Indicator color={Colors.mainCOlorPurpleDark} />
      <IconosLive color={Colors.SecondaryPurpleLight}>
        <StyledImg
          width={25}
          height={22}
          source={require("../../assets/images/camara.png")}
        />
      </IconosLive>
      <IconosLive color={Colors.SecondaryPurpleLight}>
        <Icon name="mic-off" color={Colors.SecondaryGray} size={25} />
      </IconosLive>
      <IconosLive color={Colors.mainColorRed}>
        <Icon name="call-end" color={Colors.white} size={25} />
      </IconosLive>
      <IconosLive color={Colors.SecondaryPurpleLight}>
        <Icon name="more-vert" color={Colors.SecondaryGray} size={25} />
      </IconosLive>
    </Container>
  );
}
