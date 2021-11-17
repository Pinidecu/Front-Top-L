import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  titulo: string;
  margin: string;
  colorIcons: string;
  colorText?: string;
  add?: boolean;
  threePoints?: boolean;
  lupa?: boolean;
  lupaBlue?: boolean;
  campana?: boolean;
}

interface StyledContainerProps {
  margin: string;
}

const Container = styled.View<StyledContainerProps>`
  flex-direction: row;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: ${(props) => props.margin};
  justify-content: space-between;
  align-items: center;
`;

interface StyledTextProps {
  color: string;
}
const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 14;
  font-weight: 700;
  line-height: 18;
  margin-left: 25px;
`;
const RigthContainer = styled.View`
  flex-direction: row;
  column-gap: 5;
  align-items:center;
`;

interface StyledImgProps {
  width: number;
  height: number;
}
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
const Campana = styled.View`
  margin-bottom: 5px;
`;

interface PuntoProps {
  color: string;
}
const Punto = styled.View<PuntoProps>`
  background-color: ${(props) => props.color};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: relative;
  left: 10px;
  top:5px;
  z-index: 1;
`;

export default function BarraIconos({
  titulo,
  margin,
  colorIcons,
  colorText,
  threePoints,
  lupa,
  lupaBlue,
  add,
  campana,
}: Props) {
  return (
    <Container margin={margin}>
      <Icon name="chevron-left" color={colorIcons} size={25} />
      <StyledText color={colorText ? colorText : Colors.mainCOlorPurpleLigth}>
        {titulo}
      </StyledText>
      <RigthContainer>
        {lupa ? <Icon name="search" color={Colors.black} size={25} /> : null}
        {lupaBlue ? <Icon name="search" color={colorIcons} size={25} /> : null}
        {add ? <Icon name="add" color={colorIcons} size={25} /> : null}
        {threePoints ? (
          <Icon name="more-horiz" color={colorIcons} size={25} />
        ) : null}
        {campana ? (
          <Campana>
            <Punto color={Colors.mainColorRed}></Punto>
            <StyledImg
              width={20}
              height={20}
              source={require("../../assets/images/campana.png")}
            />
          </Campana>
        ) : null}
      </RigthContainer>
    </Container>
  );
}
