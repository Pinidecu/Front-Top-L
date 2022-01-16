import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextView, StyledText, StyledImgIcon, NotiView } from "./styles";
import Colors from "../../../constants/Colors";
import Portada from "./Portada/Portada";

export default function PerfilProEditar1() {
  return (
    <ScrollView>
      <Portada />
    </ScrollView>
  );
}
