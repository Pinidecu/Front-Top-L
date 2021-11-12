import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import InfoMiPerfil from "../../Componentes/InfoMiPerfil";
import BarraIconos from "../../Componentes/BarraIconos";
import Explorar from "../../Componentes/Explorar";
import Actividad from "../../Componentes/Actividad";
import Agenda from "../../Componentes/Agenda";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import {
  ContainerPrincipal,
  ContainerSuperior,
  ContainerInferior,
  Botones,
  ActividadView,
  ContainerPrincipalAgenda,
} from "../StyledComponents/StyledComponents";
import Boton from "../../Componentes/Boton";
import Colors from "../../../constants/Colors";
import DiaAgenda from "../../Componentes/DiaAgenda";
import styled from "styled-components/native";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

export const Eventos = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  align-self: center;
`;

export default function AgendaDia({ navigation }: Props) {
  return (
    <ScrollView>
      <ContainerPrincipalAgenda>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => {
            navigation.navigate("HorariosTarifas");
          }}
        >
          <BarraIconos
            titulo={"Mi agenda live"}
            margin={"0px"}
            colorIcons={Colors.mainCOlorPurpleLigth}
            threePoints={true}
            add={true}
          />
        </TouchableOpacity>
        <DiaAgenda
          ancho={90}
          alto={54}
          texto={"Martes 21 de julio"}
          icon={"expand-less"}
        />
        <Eventos>
          <Agenda
            titulo="Yoga para ti, para mí y para todos! 9:00AM - 4:00 PM"
            hora="9:00"
            md="AM"
          />
          <Agenda
            titulo="Asesoría Terapia holistica con Carlos Andrés Solano.  5:00PM - 6:00 PM"
            hora="5:00"
            md="PM"
          />
          <Agenda
            titulo="Webinar Emprendedores de éxito con Promigas S.A. "
            hora="9:00"
            md="PM"
          />
          <Agenda
            titulo="Asesoría Terapia de parejas con Carlos y Josefina Marino."
            hora="10:00"
            md="PM"
          />
          <Agenda
            titulo="Asesoría psicología Angie paola Perez Ramirez."
            hora="11:00"
            md="PM"
          />
        </Eventos>
        <DiaAgenda
          ancho={90}
          alto={54}
          texto={"Martes 21 de julio"}
          icon={"expand-less"}
        />
        <Eventos>
          <Agenda
            titulo="Yoga para ti, para mí y para todos! 9:00AM - 4:00 PM"
            hora="10:00"
            md="AM"
          />
          <Agenda
            titulo="Asesoría Terapia holistica con Carlos Andrés Solano.  5:00PM - 6:00 PM"
            hora="11:00"
            md="AM"
          />
          <Agenda
            titulo="Webinar Emprendedores de éxito con Promigas S.A. "
            hora="5:00"
            md="PM"
          />
          <Agenda
            titulo="Asesoría Terapia de parejas con Carlos y Josefina Marino."
            hora="7:00"
            md="PM"
          />
        </Eventos>
      </ContainerPrincipalAgenda>
    </ScrollView>
  );
}
