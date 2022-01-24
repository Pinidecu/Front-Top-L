import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";
import { Linea } from "../../../Pantallas/StyledComponents/StyledComponents";
import { Container, StyledText } from "../styles";
import { LineaView, TextView } from "./styles";

interface Props {
  nombre: string;
  linea?: boolean;
}


export default function Historial({ nombre, linea }: Props) {
  return (
    <Container>
      <TextView>
        <StyledText
          size={16}
          weight={400}
          fs={"italic"}
          lh={24}
          color={Colors.mainColorBlack}
        >
          {nombre}
        </StyledText>
        <Icon
          name="chevron-right"
          color={Colors.mainCOlorPurpleLigth}
          size={30}
        />
      </TextView>
      {linea ? <LineaView /> : null}
    </Container>
  );
}
