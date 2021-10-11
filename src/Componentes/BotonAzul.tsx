import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
  justify-content: center;
  column-gap: 10;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 8;
`;

const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: Roboto;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
`;

/* const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "#4E31EB",
      alignItems: "center",
      justifyContent: "center",
      columnGap: 10,
      width: ancho,
      height: alto,
      borderRadius: 8,
    },
    text: {
      color: "white",
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 24,
    },
  }); */

export default function BotonAzul({ ancho, alto, texto, icon }: Props) {
  return (
    <Container width={ancho} height={alto} color={Colors.colorBoton}>
      {icon ? (
        <Icon
          name={icon}
          color="white"
          size={35}
          onPress={() => console.log("hello")}
        />
      ) : null}
      <StyledText weight={400} size={16} lh={24} color={Colors.colorTextBoton}>
        {texto}
      </StyledText>
    </Container>
  );
}
