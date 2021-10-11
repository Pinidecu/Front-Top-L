import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  titulo: string;
}


const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 10;
  padding-right: 10;
  justify-content: space-between;
  margin: 10px;
`;
const StyledText = styled.Text`
  color: ${Colors.mainCOlorPurpleLigth};
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 14;
  font-weight: 700;
  line-height: 18;
`;
const RigthContainer = styled.View`
  flex-direction: row;
  column-gap: 5;
`;

export default function BarraIconos({ titulo }: Props) {
  return (
    <Container>
      <Icon name="chevron-left" color={Colors.mainCOlorPurpleLigth} size={20} />
      <StyledText>{titulo}</StyledText>
      <RigthContainer>
        <Icon name="add" color={Colors.mainCOlorPurpleLigth} size={20} />
        <Icon name="more-horiz" color={Colors.mainCOlorPurpleLigth} size={20} />
      </RigthContainer>
    </Container>
  );
}

export const styles = StyleSheet.create({
  iconos: {
    flexDirection: "row",
    width: "100%",
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
  },
  titulo: {
    fontFamily: "Proxima Nova",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 18,
    color: "#5B74FB",
  },
  rigth: {
    flexDirection: "row",
    columnGap: 5,
  },
});
