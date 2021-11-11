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
} from "../StyledComponents/StyledComponents";
import Boton from "../../Componentes/Boton";
import Colors from "../../../constants/Colors";
import fotoPerfil from "../../../assets/images/fotoPerfil.png";
import fotoAct from "../../../assets/images/fotoAct.png";
import fotoDestacado from "../../../assets/images/Equipo1.png";
import fotoActividad from "../../../assets/images/Sala3.png";
import styled from "styled-components/native";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

const AgendaView = styled.View`
  width: 100%;
  padding: 0 10px;
`;

export default function PerfilVistaPersonal({ navigation }: Props) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <ContainerPrincipal>
        <ContainerSuperior>
          <BarraIconos
            titulo={"Mi perfil"}
            margin={"30px"}
            colorIcons={Colors.mainCOlorPurpleDark}
            threePoints={true}
            add={true}
          />
          <InfoMiPerfil
            nombre={"Alejandra Martinez Ruiz"}
            crear={"Crear perfil profesional"}
            foto={fotoPerfil}
            tags={[
              "#uxui",
              "#freelance",
              "#uxdesign",
              "#Educación",
              "#Webdesign",
              "#culturadigital",
            ]}
          />
          <TouchableOpacity
          style={{width:'100%',alignItems:'center'}}
            onPress={() => {
              navigation.navigate("PerfilProEdicion");
            }}
          >
            <Botones>
              <Boton
                ancho={100}
                alto={55.08}
                texto={"EDITAR MI PERFIL"}
                icon={""}
              />
            </Botones>
          </TouchableOpacity>
        </ContainerSuperior>
        <ContainerInferior>
          <Explorar titulo={"Actividad"} />
          <ActividadView>
            <Actividad
              descripcion={"Yoga para ti, para mí y para todos! Aeroyogabaq"}
              compartido={"@karendagy ha compartido esto hoy"}
              foto={fotoDestacado}
            />
            <Actividad
              descripcion={
                " @ronalddiaz creó este evento sobre un tema que sigues: Seminario live sobre el fitness en el caribe "
              }
              compartido={""}
              foto={fotoActividad}
            />
            <Actividad
              descripcion={
                "Se creó un nuevo tema asociado a un evento al que asistirás sobre Marketing digital. Te interesa saber más?"
              }
              compartido={""}
              foto={fotoAct}
            />
          </ActividadView>
          <Explorar titulo={"Mi agenda"} />
          <AgendaView>
          <Agenda
            titulo="La tertulia sobre marketing contemporaneo 2:00pm - 4:00 pm"
            hora="21"
            md="LUN"
          /></AgendaView>
        </ContainerInferior>
      </ContainerPrincipal>
    </ScrollView>
  );
}
