import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Container, Titulo, StyledText, TextSubrayado } from "./styles";
import Colors from "../../../constants/Colors";
import Portada from "./Portada/Portada";
import PerfilInfo from "./PerfilInfo/PerfilInfo";
import InfoEducativa from "./InfoEducativa/InfoEducativa";

export default function PerfilProEditar1() {
  return (
    <Container>
      <Portada />
      <PerfilInfo
        nombre={"Alejandra Martinez"}
        profesion={"Instructora de yoga"}
        estrellas={"4.5"}
        reviews={"128"}
      />
      <Titulo>Idiomas profesionales</Titulo>
      <InfoEducativa
        nivel={"B2"}
        area={"Inglés profesional"}
        centro={"Universidad del Atlántico"}
        año={"2016"}
        especializacion={"addd"}
      />
      <TextSubrayado>Agregar otra formación</TextSubrayado>
    </Container>
  );
}
