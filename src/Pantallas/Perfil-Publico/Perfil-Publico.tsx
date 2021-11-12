import React from "react";
import { View, ScrollView } from "react-native";
import Info from "../../Componentes/info";
import BotonAzul from "../../Componentes/BotonAzul";
import { Icon } from "react-native-elements";
import BarraIconos from "../../Componentes/BarraIconos";
import Explorar from "../../Componentes/Explorar";
import Destacado from "../../Componentes/Destacado";
import Actividad from "../../Componentes/Actividad";
import Publicacion from "../../Componentes/Publicacion";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import {
  ContainerPrincipal,
  ContainerSuperior,
  ContainerInferior,
  Navegacion,
  Titulo,
  TituloText,
  Botones,
  DestacadoView,
  PublicacionView,
  ActividadView,
} from "../StyledComponents/StyledComponents";
import Colors from "../../../constants/Colors";
import foto from "../../../assets/images/Sala/7.png";
import chat from "../../../assets/images/chat.png";
import fotoDestacado from "../../../assets/images/Equipo1.png";
import fotoActividad from "../../../assets/images/Sala3.png";
import fotoPerfilPublicacion from "../../../assets/images/Sala/10.png";
import fotoPubliacacion from "../../../assets/images/Publicacion.png";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

export default function PerfilPublico({ navigation }: Props) {
  return (
    <ScrollView>
      <ContainerPrincipal>
        <ContainerSuperior>
          <BarraIconos
            titulo={""}
            margin={"0px"}
            colorIcons={Colors.mainCOlorPurpleDark}
            threePoints={true}
            add={true}
          />
          <Navegacion>
            <View></View>
            {/* para ordenar la navegacion */}
            <Titulo
              onPress={() => {
                navigation.navigate("PerfilProPublico");
              }}
            >
              <TituloText>Perfil profesional</TituloText>
              <Icon
                name="arrow-right-bold"
                type="material-community"
                color="#4E31EB"
                size={20}
              />
            </Titulo>
          </Navegacion>
          <Info
            nombre={"Alejandra Martinez Ruiz"}
            profesion={"Instructora de yoga"}
            foto={foto}
            rubros={["Yoga", "Meditacion holística"]}
            tags={[
              "#uxui",
              "#freelance",
              "#uxdesign",
              "#Educación",
              "#Webdesign",
              "#culturadigital",
            ]}
          />
          <Botones>
            <BotonAzul
              ancho={49}
              alto={55.08}
              texto={"AGENDAR ASESORIA"}
              icon={""}
            />
            <BotonAzul ancho={49} alto={55.08} texto={"MENSAGE"} icon={chat} />
          </Botones>
        </ContainerSuperior>
        <ContainerInferior>
          <Explorar titulo={"Contenido destacado"} />
          <DestacadoView>
            <Destacado
              titulo={"Dra Alejandra website profesional"}
              lugar={"Website"}
              descripcion={
                "Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum."
              }
              foto={fotoDestacado}
            />
            <Destacado
              titulo={"Dra Alejandra website profesional"}
              lugar={"Website"}
              descripcion={
                "Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum."
              }
              foto={fotoDestacado}
            />
          </DestacadoView>
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
          </ActividadView>
          <PublicacionView>
            <Publicacion
              fotoPerfil={fotoPerfilPublicacion}
              nombre={"Armando Lopez • @arlopez21 • 2h"}
              descripcion={"Group name lorem ipsum dolor amet sim athem"}
              imagen={fotoPubliacacion}
            />
          </PublicacionView>
        </ContainerInferior>
      </ContainerPrincipal>
    </ScrollView>
  );
}
