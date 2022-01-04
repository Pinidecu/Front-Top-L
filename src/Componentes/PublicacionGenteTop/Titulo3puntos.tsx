import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
  fs: string;
}
interface ContainerProps {
  width: number;
}
const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  width: ${(props) => props.width}%;
  justify-content: space-between;
`;
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  font-style: ${(props) => props.fs};
`;

interface Props {
  titulo: string;
  width:number;
}

export default function Titulo3Puntos({ titulo, width }: Props) {
  return (
    <Container width={width}>
      <StyledText
        size={16}
        weight={700}
        fs={"normal"}
        lh={24}
        color={Colors.black}
      >
        {titulo}
      </StyledText>
      <Icon name="more-horiz" color={Colors.mainCOlorPurpleLigth} size={25} />
    </Container>
  );
}
