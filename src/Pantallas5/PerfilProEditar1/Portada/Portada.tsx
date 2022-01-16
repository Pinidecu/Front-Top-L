import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Container,
  StyledBookmark,
  TextView,
  StyledText,
  StyledImgIcon,
  NotiView,
} from "./styles";
import Colors from "../../../../constants/Colors";
import foto from "../../../../assets/images//Portada/1.png";
import Barra from "../Barra/Barra";

export default function Portada() {
  return (
    <Container foto={foto}>
      <Barra />
      <StyledBookmark
        width={30}
        height={37}
        source={require("../../../../assets/images/bookmark-clicked.png")}
      />
    </Container>
  );
}
