import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  titulo: string;
  icono: string;
}



const Container = styled.View`
  flex-direction: row;
  width: 95px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Colors.bordeDestacado};
  border-radius: 24px;
  padding: 0px 10px;
`;
const StyledText = styled.Text`
  color: ${Colors.bordeDestacado};
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 14;
  font-weight: 400;
  line-height: 29;
`;

export default function Hashtag({
  titulo,
  icono
}: Props) {
  return (
    <Container>
      <StyledText>{titulo}</StyledText>
      <Icon name={icono} color={Colors.mainCOlorPurpleLigth} size={23} />    
    </Container>
  );
}
