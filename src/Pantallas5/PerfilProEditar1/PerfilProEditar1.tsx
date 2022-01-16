import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextView, StyledText, StyledImgIcon, NotiView } from "./styles";
import Colors from "../../../constants/Colors";
import Portada from "./Portada/Portada";
import PerfilInfo from "./PerfilInfo/PerfilInfo";

export default function PerfilProEditar1() {
  return (
    <ScrollView>
      <Portada />
      <PerfilInfo
        nombre={"Alejandra Martinez"}
        profesion={"Instructora de yoga"}
        estrellas={"4.5"}
        reviews={"128"}
      />
    </ScrollView>
  );
}
