import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  titulo: string;
  margin: string;
  colorIcons:string;
  threePoints:boolean;
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
`;
const StyledText = styled.Text`
  color: ${Colors.mainCOlorPurpleLigth};
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
`;

export default function BarraIconos({ titulo, margin, colorIcons, threePoints }: Props) {
  return (
    <Container margin={margin}>
      <Icon name="chevron-left" color={colorIcons} size={20} />
      <StyledText>{titulo}</StyledText>
      <RigthContainer>
        <Icon name="add" color={colorIcons} size={20} />
        {threePoints ? <Icon name="more-horiz" color={colorIcons} size={20} /> : null}
      </RigthContainer>
    </Container>
  );
}


