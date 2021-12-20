import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  ancho: number;
  alto: number;
  texto: string;
  icon: string;
}
interface ContainerProps {
  color: string;
  width: number;
  height: number;
}
interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
}

const Container = styled.View<ContainerProps>`
  flex-direction: row;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 4px;
  padding: 0px 10px;
`;

const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
`;



export default function CuadroHora({ ancho, alto, texto, icon }: Props) {
  return (
    <Container width={ancho} height={alto} color={Colors.white}>
      <StyledText weight={400} size={16} lh={16.8} color={Colors.mainColorBlack}>
        {texto}
      </StyledText>
      {icon ? (
        <Icon
          name={icon}
          color={Colors.mainCOlorPurpleLigth}
          size={35}
        />
      ) : null}
    </Container>
  );
}
