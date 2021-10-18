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
  justify-content: space-around;
  padding: 10px;
  column-gap: 10px;
  height: 15vh;
  width: 100%;
  position: absolute;
  bottom: 0vh;
`;
interface StyledTextProps {
  color: string;
}

export const IconosLive = styled.View`
  align-items: center;
  justify-content: center;
  row-gap: 5px;
`;
const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 12;
  font-weight: 700;
  line-height: 14;
`;

interface IndicatorProps {
  color: string;
}
const Indicator = styled.View<IndicatorProps>`
  background-color: ${(props) => props.color};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 5px;
  width: 134px;
  position: absolute;
  top: -5px;
  right: 0px;
`;

export default function NavLiveOpcion2() {
  return (
    <Container color={Colors.white}>
      <Indicator color={Colors.mainCOlorPurpleLigth} />
      <IconosLive>
        <Icon
          name="idcard"
          type="ant-design"
          color={Colors.mainCOlorPurpleDark}
          size={25}
        />
        <StyledText color={Colors.mainCOlorPurpleDark}>
          Ficha Personal
        </StyledText>
      </IconosLive>
      <IconosLive>
        <Icon name="article" color={Colors.SecondaryGray} size={25} />
        <StyledText color={Colors.SecondaryGray}>Recomendaciones</StyledText>
      </IconosLive>
      <IconosLive>
        <Icon name="folder" color={Colors.SecondaryGray} size={25} />
        <StyledText color={Colors.SecondaryGray}>Documentos</StyledText>
      </IconosLive>
      <IconosLive>
        <Icon name="calendar-today" color={Colors.SecondaryGray} size={25} />
        <StyledText color={Colors.SecondaryGray}>Historial</StyledText>
      </IconosLive>
    </Container>
  );
}
