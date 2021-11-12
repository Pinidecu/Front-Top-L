import React from "react";
import { ScrollView } from "react-native";
import InfoMiPerfil from "../../Componentes/InfoMiPerfil";
import BarraIconos from "../../Componentes/BarraIconos";
import Edicion from "../../Componentes/Edicion";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import {
  ContainerPrincipal,
  ContainerAgenda,
  Linea,
  TextoConfiguracion,
} from "../StyledComponents/StyledComponents";
import Colors from "../../../constants/Colors";
import fotoPerfil from "../../../assets/images/fotoPerfil.png";
import user from "../../../assets/images/user.png";
import maletin from "../../../assets/images/maletin.png";
import group from "../../../assets/images/group.png";
import agenda from "../../../assets/images/agenda.png";
import billetera from "../../../assets/images/billetera.png";


type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

export default function PerfilProEdicion({ navigation }: Props) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <ContainerPrincipal>
        <BarraIconos
          titulo={"Mi espacio"}
          margin={"30px"}
          colorIcons={Colors.mainCOlorPurpleLigth}
          threePoints={true}
          add={true}
        />
        <InfoMiPerfil
          nombre={"Alejandra Martinez Ruiz"}
          crear={"Yoga •  Meditación holística"}
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
        <ContainerAgenda>
          <Edicion titulo={"Ajustes de perfil"} icono={user} />
          <Edicion titulo={"Contenido creado"} icono={maletin} />
          <Edicion titulo={"Mi equipo"} icono={group} />
          <Edicion titulo={"Mi agenda"} icono={agenda} />
          <Edicion titulo={"Mi billeterea"} icono={billetera} />
        </ContainerAgenda>
        <Linea />
        <TextoConfiguracion>Configuración y privacidad</TextoConfiguracion>
        <TextoConfiguracion>Centro de ayuda</TextoConfiguracion>
      </ContainerPrincipal>
    </ScrollView>
  );
}
